module app.common {
	interface IDataAccessService {
		getProductResource(): ng.resource.IResourceClass<IProductResource>;
	}

	interface IProductResource
		extends ng.resource.IResource<app.domain.IProduct> {
	}
	interface IEventResource
		extends ng.resource.IResource<app.domain.IEvent> {
	}

	export class DataAccessService
		implements IDataAccessService {

		static $inject = ["$resource"];
		constructor(private $resource: ng.resource.IResourceService) {
		}

		getProductResource(): ng.resource.IResourceClass<IProductResource> {
			return this.$resource("/api/products/:productId");
		}
		getEventResource(): ng.resource.IResourceClass<IEventResource> {
			return this.$resource("/api/events/:eventId");
		}
	}
	angular
		.module("common.services")
		.service("dataAccessService",
			DataAccessService);
}