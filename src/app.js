require('skeleton-scss/scss/skeleton.scss');
require('./app.scss');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import common from './common';
import home from './home';
import countries from './countries';

angular.module('app', [uirouter, common, home, countries])
  .config(routing);