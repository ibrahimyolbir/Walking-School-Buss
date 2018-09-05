var app = angular.module("wsbApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
    })
    .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/childrensave', {
        templateUrl: 'templates/childrensave.html',
        controller: 'ChildrenSaveController'
    }) 
    .when('/groupcreate', {
        templateUrl: 'templates/groupcreate.html',
        controller: 'GroupCreateController'
    }) 
});


