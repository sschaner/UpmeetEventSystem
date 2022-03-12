import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faHome,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';
import { IFavoriteEvent } from '../interfaces/IFavoriteEvent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  userId: number = 1;
  eventId: number = 1;
  event: any;
  favoriteEvent: IFavoriteEvent | undefined;
  favoriteEvents: IFavoriteEvent[] = [];
  favoritedMessage: string = '';

  faHome = faHome;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  // eventDetails: IEvent | undefined;

  constructor(
    private repo: EventsRepositoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.eventId = this.route.snapshot.params['eventId'];
    this.repo.getEventById(this.eventId).subscribe((response) => {
      this.event = response;
    });
    // this.eventDetails = this.repo.getEventDetails(this.eventId);
    this.favoriteEvents = this.repo.getFavoriteEvents();
  }

  favoriteYes() {
    // Add event with this eventId and userId to favorites table
    console.log(`User Id: ${this.userId}`);
    // console.log(`Event: ${this.eventDetails}`);
    this.favoritedMessage =
      "You've successfully added this event to your favorites.";
  }

  favoriteNo() {
    // Remove event with this eventId and userId to favorites table
    this.favoritedMessage =
      "You've successfully removed this event from your favorites.";
  }
}
