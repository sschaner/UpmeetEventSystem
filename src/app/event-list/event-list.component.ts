import { Component, OnInit, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  @Input() userId: any | undefined;
  // events: IEvent[] = [];
  events: any;
  faCircleInfo = faCircleInfo;

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    // this.events = this.repo.getEvents();
    this.repo.getEvents().subscribe((response) => {
      this.events = response;
    });
  }
}
