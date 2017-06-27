import * as angular from 'angular';
import { UrlRouterProvider, StateProvider } from 'angular-ui-router';
import { AppComponent } from './app.component';
import Common from './common';
import Components from './components';

import './app.scss';


function routeConfig(
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: UrlRouterProvider,
    $stateProvider: StateProvider
) {
    "ngInject";

    $stateProvider
        .state('app', {
            redirectTo: 'app.home',
            abstract: true,
            component: 'app'
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

const App: ng.IModule = angular
    .module('app', [
        'ui.router',
        'ngMessages',
        'ngAria',
        'ngAnimate',
        // 'ngCookies',
        // 'ngSanitize',
        Common,
        Components
    ])
    .config(routeConfig)	
    .component('app', new AppComponent);

export default App.name;