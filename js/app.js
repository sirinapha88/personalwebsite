var app = angular.module("myWebsite", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "./views/template/about.html",
        controller: "ProjectCtrl",
    }).when('/projects', {
        templateUrl: "./views/template/projects.html",
        controller: "ProjectCtrl",
    }).when('/resume', {
        templateUrl: "./views/template/resume.html",
        controller: "ProjectCtrl",
    }).when('/contact', {
        templateUrl: "./views/template/contact.html",
        controller: "MainCtrl",
    }).otherwise({
        redirectTo: "/"
    });
});