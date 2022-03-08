import { Component, OnInit } from '@angular/core';
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
  events: IEvent[] = [];
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faHome = faHome;

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    this.events = this.repo.getEvents();
  }
}
