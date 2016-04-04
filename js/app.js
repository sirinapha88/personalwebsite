var app = angular.module("myWebsite", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "/views/template/about.html",
        controller: "MainCtrl",
    }).when('/projects', {
        templateUrl: "/views/template/projects.html",
        controller: "MainCtrl",
    }).when('/resume', {
        templateUrl: "/views/template/resume.html",
        controller: "MainCtrl",
    }).when('/contact', {
        templateUrl: "/views/template/contact.html",
        controller: "MainCtrl",
    }).otherwise({
        redirectTo: "/"
    });
});