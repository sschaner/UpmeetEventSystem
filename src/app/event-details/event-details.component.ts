import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faHome,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
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
  favoritedMessage: string = '';
  addFavoriteEventButtonText: string = 'Add to Favorites';
  favoriteEventFormIsVisible: boolean = false;

  // FontAwesome Icons
  faHome = faHome;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

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
  }

  addFavoriteEventButton() {
    this.favoriteEventFormIsVisible = !this.favoriteEventFormIsVisible;
    if (this.favoriteEventFormIsVisible == true) {
      this.addFavoriteEventButtonText = 'Hide Form';
    } else if (this.favoriteEventFormIsVisible == false) {
      this.addFavoriteEventButtonText = 'Add to Favorites';
    }
  }

  favoriteYes() {
    this.repo
      .AddFavoriteEvent(this.userId, this.eventId)
      .subscribe((response) => {});
    this.favoritedMessage =
      "You've successfully added this event to your favorites.";
  }

  favoriteNo() {
    this.repo
      .RemoveFavoriteEvent(this.userId, this.eventId)
      .subscribe((resonse) => {});
    this.favoritedMessage =
      "You've successfully removed this event from your favorites.";
  }
}
