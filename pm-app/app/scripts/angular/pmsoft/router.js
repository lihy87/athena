/**
 * Created by FanTaSyLin on 2016/8/12.
 */

(function () {

    'user strict';

    angular
        .module('PMSoft')
        .config(PMSoftRouter);

    PMSoftRouter.$inject = ['$routeProvider'];

    function PMSoftRouter($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/project.html'
            //controller: 'ProjectCtrl'
        });

        $routeProvider.when('/mystatus', {
            templateUrl: 'partials/mystatus.html'
        });

        $routeProvider.when('/project', {
            templateUrl: 'partials/project.html'
            //controller: 'ProjectCtrl'
        });

        $routeProvider.when('/review', {
            templateUrl: 'partials/review.html'
            //controller: 'ProjectCtrl'
        });

        $routeProvider.when('/department', {
            templateUrl: 'partials/department.html'
            //controller: 'MaintenanceCtrl'
        });

        $routeProvider.when('/myown', {
            templateUrl: 'partials/myown.html'
            //controller: 'MyOwnCtrl'
        });

        $routeProvider.when('/calendar', {
            templateUrl: 'partials/calendar.html'
            //controller: 'CalendarCtrl'
        });

        $routeProvider.when('/building', {
            templateUrl: 'partials/building.html'
            //controller: 'BuildingCtrl'
        });

        $routeProvider.when('/accountconfig', {
            templateUrl: 'partials/accountconfig.html'
            //controller: 'BuildingCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/building'
        });

    }

})();