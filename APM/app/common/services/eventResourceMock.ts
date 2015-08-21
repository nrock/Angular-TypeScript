module app.common {

    var mockResource = angular
        .module("eventResourceMock",
            ["ngMockE2E"]);

    mockResource.run(mockRun);
    
    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var events: app.domain.IEvent[] = [];
        var event: app.domain.IEvent;

        event = new app.domain.Event(1, "Fall Sale",  new Date(2009, 2, 19) , new Date(2009, 2, 19) );
        events.push(event);

        event = new app.domain.Event(2, "Summer Sale",  new Date(2009, 2, 19) , new Date(2009, 2, 19) );
        events.push(event);

        event = new app.domain.Event(3, "Winter Sale",  new Date(2009, 2, 19) , new Date(2009, 2, 19) );
        events.push(event);
 
        event = new app.domain.Event(4, "Cash Giveaway Sale",  new Date(2009, 2, 19) , new Date(2009, 2, 19) );
        events.push(event);
        
        event = new app.domain.Event(5, "4th of July Sale",  new Date(2009, 2, 19) , new Date(2009, 2, 19) );
        events.push(event);

        var eventUrl = "/api/events";

        $httpBackend.whenGET(eventUrl).respond(events);

        var editingRegex = new RegExp(eventUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var event = { "eventId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < events.length; i++) {
                    if (events[i].eventId == id) {
                        event = events[i];
                        break;
                    }
                }
            }
            return [200, event, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function(method, url, data) {
            return [200, events, {}];
        });
                
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}