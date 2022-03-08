import { Component, OnInit } from '@angular/core';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    this.events = this.repo.getEvents();
  }
}
