import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavoriteEvent } from './interfaces/IFavoriteEvent';

@Injectable({
  providedIn: 'root',
})
export class EventsRepositoryService {
  favoriteEvents: IFavoriteEvent[] = [
    {
      userId: 6,
      event: {
        eventId: 3,
        title: 'Regularly Scheduled Meeting',
        host: 'Ben Rousch',
        description:
          "Our monthly meetings typically include a formal presentation by a group member, hacking on group projects, open discussions, and more. Afterwards, we go out for drinks and dinner at the nearby HopCat brewery. More details about this specific meeting will be available as we get closer to the meeting date. If no topic has been selected for this meeting yet, please volunteer to give a talk or suggest something you'd like to learn more about by contacting the organizers.",
        location: 'Grand Rapids',
        start: new Date(2022, 3, 21, 18, 0, 0, 0),
        end: new Date(2022, 3, 21, 19, 30, 0, 0),
      },
    },
    {
      userId: 6,
      event: {
        eventId: 3,
        title: 'Regularly Scheduled Meeting',
        host: 'Ben Rousch',
        description:
          "Our monthly meetings typically include a formal presentation by a group member, hacking on group projects, open discussions, and more. Afterwards, we go out for drinks and dinner at the nearby HopCat brewery. More details about this specific meeting will be available as we get closer to the meeting date. If no topic has been selected for this meeting yet, please volunteer to give a talk or suggest something you'd like to learn more about by contacting the organizers.",
        location: 'Grand Rapids',
        start: new Date(2022, 3, 21, 18, 0, 0, 0),
        end: new Date(2022, 3, 21, 19, 30, 0, 0),
      },
    },
  ];

  private localHostNumber = 44381;
  private apiUri: string = `https://localhost:${this.localHostNumber}/api/event`;
  private apiUri2: string = `https://localhost:${this.localHostNumber}/api/userevent`;

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(this.apiUri);
  }

  getEventById(id: number) {
    return this.http.get(`${this.apiUri}/${id}`);
  }

  saveNewEvent(upMeet: Event) {
    return this.http.post(this.apiUri, upMeet);
  }

  removeEvent(id: number) {
    return this.http.delete(`${this.apiUri}/${id}`);
  }

  getFavoriteEventsByUserId(id: number) {
    return this.http.get(`${this.apiUri2}/${id}`);
  }

  AddFavoriteEvent(userId: number, eventId: number) {
    return this.http.post(
      `${this.apiUri2}?userId=${userId}&eventId=${eventId}`,
      { userId, eventId }
    );
  }

  RemoveFavoriteEvent(userId: number, eventId: number) {
    return this.http.delete(
      `${this.apiUri2}?userId=${userId}&eventId=${eventId}`
    );
  }

  // getFavoriteEvents() {
  //   return this.favoriteEvents;
  // }
}
