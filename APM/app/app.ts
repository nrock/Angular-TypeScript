module app {
	
	
	var main = angular.module("eventManagement",[ "ngRoute",
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
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {

		$routeProvider
			/*.when("/productList",
				{
					templateUrl: "/app/products/productListView.html",
					controller: "ProductListCtrl as vm"
				})
			.when("/productDetail/:productId",
				{
					templateUrl: "/app/products/productDetailView.html",
					controller: "ProductDetailCtrl as vm"
				})*/
			.when("/eventList",
				{
					templateUrl: "/app/events/eventListView.html",
					controller: "EventListCtrl as vm"
				})
			.otherwise("/eventList");
	}
}