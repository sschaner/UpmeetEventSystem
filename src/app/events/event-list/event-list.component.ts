import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventsRepositoryService } from '../events-repository.service';

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
