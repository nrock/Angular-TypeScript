var app;
(function (app) {
    var eventList;
    (function (eventList) {
        var EventListCtrl = (function () {
            function EventListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Event List";
                this.events = [];
                var eventResource = dataAccessService.getEventResource();
                eventResource.query(function (data) {
                    _this.events = data;
                });
            }
            EventListCtrl.$inject = ["dataAccessService"];
            return EventListCtrl;
        })();
        angular
            .module("eventManagement")
            .controller("EventListCtrl", EventListCtrl);
    })(eventList = app.eventList || (app.eventList = {}));
})(app || (app = {}));
