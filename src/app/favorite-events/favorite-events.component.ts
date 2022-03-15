import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faCircleInfo,
  faHome,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-favorite-events',
  templateUrl: './favorite-events.component.html',
  styleUrls: ['./favorite-events.component.css'],
})
export class FavoriteEventsComponent implements OnInit {
  // events: IEvent[] = [];
  userId: number = 1;
  events: any;
  favoriteEvents: IEvent[] = [];
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faHome = faHome;

  eventDetails: IEvent | undefined;

  constructor(
    private repo: EventsRepositoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.events = this.repo.getEvents();
  }

  setFavorite(form: NgForm) {}
}
