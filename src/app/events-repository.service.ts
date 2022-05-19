import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavoriteEvent } from './interfaces/IFavoriteEvent';

@Injectable({
  providedIn: 'root',
})
export class EventsRepositoryService {
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

  updateEventById(id: number, body: Event) {
    return this.http.put(`${this.apiUri}/${id}`, body);
  }

  removeEvent(id: number) {
    return this.http.delete(`${this.apiUri}/${id}`);
  }

  getFavoriteEventsByUserId(id: number) {
    return this.http.get(`${this.apiUri2}?userId=${id}`);
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
}
