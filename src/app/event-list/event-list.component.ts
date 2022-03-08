import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: IEvent[] = [];
  faCircleInfo = faCircleInfo;

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    this.events = this.repo.getEvents();
  }
}
