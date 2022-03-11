import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  events: any;
  favoriteEvents: IEvent[] = [];
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faHome = faHome;

  eventDetails: IEvent | undefined;

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    this.events = this.repo.getEvents();
  }

  setFavorite(form: NgForm) {}
}
