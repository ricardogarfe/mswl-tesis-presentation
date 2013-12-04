/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		qunit: {
			files: [ 'test/*.html' ]
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: 'revealjs/js/reveal.js',
				dest: 'revealjs/js/reveal.min.js'
			}
		},

		cssmin: {
			compress: {
				files: {
					'revealjs/css/reveal.min.css': [ 'revealjs/css/reveal.css' ]
				}
			}
		},

		sass: {
			main: {
				files: {
					'revealjs/css/theme/default.css': 'revealjs/css/theme/source/default.scss',
					'revealjs/css/theme/beige.css': 'revealjs/css/theme/source/beige.scss',
					'revealjs/css/theme/night.css': 'revealjs/css/theme/source/night.scss',
					'revealjs/css/theme/serif.css': 'revealjs/css/theme/source/serif.scss',
					'revealjs/css/theme/simple.css': 'revealjs/css/theme/source/simple.scss',
					'revealjs/css/theme/sky.css': 'revealjs/css/theme/source/sky.scss',
					'revealjs/css/theme/moon.css': 'revealjs/css/theme/source/moon.scss',
					'revealjs/css/theme/solarized.css': 'revealjs/css/theme/source/solarized.scss',
					'revealjs/css/theme/blood.css': 'revealjs/css/theme/source/blood.scss'
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false
				}
			},
			files: [ 'Gruntfile.js', 'revealjs/js/reveal.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: '.'
				}
			}
		},

		zip: {
			'reveal-js-presentation.zip': [
				'index.html',
				'revealjs/css/**',
				'revealjs/js/**',
				'revealjs/lib/**',
				'revealjs/images/**',
				'revealjs/plugin/**'
			]
		},

		watch: {
			main: {
				files: [ 'Gruntfile.js', 'revealjs/js/reveal.js', 'revealjs/css/reveal.css' ],
				tasks: 'default'
			},
			theme: {
				files: [ 'revealjs/css/theme/source/*.scss', 'revealjs/css/theme/template/*.scss' ],
				tasks: 'themes'
			}
		},

  /**
   * Given the following directory structure:
   *
   *   build/
   *     index.html
   *     js/
   *       site.js
   *
   * The task below will create a `gh-pages` branch that looks like this:
   *
   *   index.html
   *   js/
   *     site.js
   *
   */
  'gh-pages': {
    options: {
      base: '.',
      message: 'Auto-generated commit'
    },
    src: '**/*'
  }

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-zip' );
  grunt.loadNpmTasks( 'grunt-gh-pages' );

	// Default task
	grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

	// Theme task
	grunt.registerTask( 'themes', [ 'sass' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

	// Run tests
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

  // Publish to gh-pages branch
  grunt.registerTask( 'publish', ['test', 'gh-pages']);

};
