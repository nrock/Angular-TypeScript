var app;
(function (app) {
    var main = angular.module("eventManagement", ["ngRoute",
        "common.services",
        "eventResourceMock"]);
    /*
    var product = angular.module("productManagement",
        ["ngRoute",
            "common.services",
            "productResourceMock"]);
    var event = angular.module("eventManagement",
        ["ngRoute",
            "common.services",
            "eventResourceMock"]);
    
    var main = angular.module(product);
    */
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/eventList", {
            templateUrl: "/app/events/eventListView.html",
            controller: "EventListCtrl as vm"
        })
            .otherwise("/eventList");
    }
})(app || (app = {}));
