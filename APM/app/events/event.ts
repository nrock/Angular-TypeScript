module app.domain {
	export interface IEvent {
		eventId: number;
		eventName: string;
		eventStartDate: Date;
		eventEndDate: Date;
		
	}

	export class Event implements IEvent { 
		constructor(public eventId: number,
					public eventName: string, 
					public eventStartDate: Date,
					public eventEndDate: Date ) {
		} 
	}
}