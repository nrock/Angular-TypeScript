module app.eventList {
	interface IEventListModel {
		title: string; 
		events: app.domain.IEvent[]; 
	}

	class EventListCtrl implements IEventListModel {
		title: string;  
		events: app.domain.IEvent[];
 
		static $inject = ["dataAccessService"];
		constructor(private dataAccessService: app.common.DataAccessService) {
			this.title = "Event List"; 
			this.events = []; 
			var eventResource = dataAccessService.getEventResource();
			eventResource.query((data: app.domain.IEvent[]) => {
				this.events = data;
			});  
		} 
	}
	angular
		.module("eventManagement")
		.controller("EventListCtrl",
			EventListCtrl);
}