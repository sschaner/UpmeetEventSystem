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
  favoriteEvent: IFavoriteEvent | undefined;
  favoriteEvents: IFavoriteEvent[] = [];
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
    // this.favoriteEvents = this.repo.getFavoriteEvents();
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
    // Add event with this eventId and userId to favorites table
    this.repo
      .AddFavoriteEvent(this.userId, this.eventId)
      .subscribe((response) => {});
    this.favoritedMessage =
      "You've successfully added this event to your favorites.";
  }

  favoriteNo() {
    // Remove event with this eventId and userId to favorites table
    this.repo
      .RemoveFavoriteEvent(this.userId, this.eventId)
      .subscribe((resonse) => {});
    this.favoritedMessage =
      "You've successfully removed this event from your favorites.";
  }

  // getAllUserFavoriteEvents(userId: number) {
  //   this.repo.getFavoriteEventsByUserId(this.userId).subscribe((response) => {
  //     this.router.navigate([`/users`, form.form.value.userId]);
  //   })
  // }
}
