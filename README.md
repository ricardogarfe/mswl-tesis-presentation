# Presentación Tesis [![Build Status](https://travis-ci.org/ricardogarfe/mswl-tesis-presentation.png?branch=master)](https://travis-ci.org/ricardogarfe/mswl-tesis-presentation)

Presentación de la Tesis/Trabajo Final de Master **TFM** del [Master de Libre Software](http://master.libresoft.es/) en la [Universidad Rey Juan Carlos](http://www.urjc.es/).

## ALM Tools y el proceso de desarrollo de Software de Calidad

[ALM Tools y el proceso de desarrollo de Software de Calidad](http://github.com/ricardogarfe/mswl-tesis) se encuentra publicado en github.

Si se quiere acceder al pdf directamente se puede consultar en:

* [000-tesis.pdf](https://github.com/ricardogarfe/mswl-tesis/blob/master/memoria/000-tesis.pdf?raw=true)

### Requisitos

La presentación ha sido desarrollada con `revealjs` un framework `FLOSS` javascript para presentaciones `HTML` y `nodejs` en Ubuntu.

Es una herramienta FLOSS (Free Libre Open Source Software).

Se ha integrado en el servidor Travis-ci para el compilado mediante los test de integración utilizando node.js y grunt.js.

Para el desarrollo en local se han de seguir los siguientes pasos:

```shell
$ git clone git@github.com:ricardogarfe/mswl-tesis-presentation.git
$ cd mswl-tesis-presentation
$ git submodule update --init revealjs
$ sudo apt-get install nodejs
$ npm install
$ npm install -g grunt-cli
$ grunt test
```

### Localhost

Para arrancar en localhost se ha arrancar el servidor con `grunt` (después de haber ejecutado los pasos previos):

```shell
$ grunt serve
```

## Diapositivas

La presentación está disponible en la página de Github asociada al repositorio [mswl-tesis-presentation](http://ricardogarfe.github.io/mswl-tesis-presentation).

## Licencia GPLv3

El código fuente de esta presentación se ha publicado bajo licencia [GPLv3](http://www.gnu.org/licenses/gpl.html).

## Licencia de Documentación

<a href="http://creativecommons.org/licenses/by/3.0/" rel="Creative Commons Attribution 3.0">![Foo](http://i.creativecommons.org/l/by/3.0/88x31.png)</a>

This work by Ricardo Gracía Fernández - ricardogarfe [at] gmail [dot] com is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).
