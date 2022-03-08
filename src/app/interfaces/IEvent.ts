export interface IEvent {
  eventId: number;
  title: string;
  favorited: boolean;
  host: string;
  location: string;
  start: Date;
  end: Date;
  description: Array<string>;
  ageRequirement: number;
}
