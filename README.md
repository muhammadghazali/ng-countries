ng-countries
============

[![Build Status](https://travis-ci.org/muhammadghazali/ng-countries.png?branch=master)](https://travis-ci.org/muhammadghazali/ng-countries)

# Overview

An Angular directives to typeahead countries.

# How to install

## Get it via Bower

To use this module, fist you need to install it via Bower. I assume you already install the Bower:

```
bower install ng-countries
```

## Include the main scripts

Include the main scripts into your application. Run `bower list --paths` to see the available main scripts and the following main scripts into your application:

```
$ bower list --paths

{
  "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
  "ng-countries": "bower_components/ng-countries/src/ng-countries.js"
}

```

The scripts listed on `angular-bootstrap` and `ng-countries` is the scripts that should be included into your application.

## Add to your application dependency

In order to use this module, you must ensure this module is included into your application module dependencies. For examples:

```
angular.module('yourAwesomeApplication', [
  // your application module dependencies
  'ng-countries'
]);
```

# Usage

To use this directive add the following element in your template file:

```
...
<countries></countries>
...

```

And you will see somthing like this when it's render by the browser:

![ng-coutries typeahead](https://dl.dropboxusercontent.com/u/5877351/ng-coutries-typeahead.gif)

# Development

## Install the Dev Dependencies

In order to develop this module, you have to install the required dependencies

```
# install some npm packages used on this project

$ npm install

# install some bower packages used on this project

$ bower install
```

## How to test

To run the unit tests:

```
$ npm test
```

# License

Licensed under the MIT License.