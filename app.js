var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "enroll.html",
            controller: "enrollController"
        })
        .when("/setledger", {
            templateUrl: "ledger.html",
            controller: "ledgerController"
        })
        .when("/dashboard", {
            templateUrl: "dashboard.html",
            controller: "dashboardController"
        });
});