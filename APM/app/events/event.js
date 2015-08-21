var app;
(function (app) {
    var domain;
    (function (domain) {
        var Event = (function () {
            function Event(eventId, eventName, eventStartDate, eventEndDate) {
                this.eventId = eventId;
                this.eventName = eventName;
                this.eventStartDate = eventStartDate;
                this.eventEndDate = eventEndDate;
            }
            return Event;
        })();
        domain.Event = Event;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
