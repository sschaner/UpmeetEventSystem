import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { textChangeRangeIsUnchanged } from 'typescript';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  @Input() userId: any | undefined;
  events: any;
  addEvent: boolean = false;
  addEventButtonText: string = 'Add an Event';
  eventId = 1;

  // FontAwesome Icons
  faCircleInfo = faCircleInfo;
  faTrash = faTrash;

  constructor(private repo: EventsRepositoryService) {}

  ngOnInit(): void {
    this.repo.getEvents().subscribe((response) => {
      this.events = response;
    });
  }

  addEventButton() {
    this.addEvent = !this.addEvent;
    if (this.addEvent == true) {
      this.addEventButtonText = 'Hide Form';
    } else if (this.addEvent == false) {
      this.addEventButtonText = 'Add an Event';
    }
  }

  saveEvent(form: NgForm) {
    let upMeet = form.form.value;

    this.repo.saveNewEvent(upMeet).subscribe((response) => {
      console.log(response);
    });

    // return this.repo.saveNewEvent(upMeet);
  }

  removeEvent(eventId: number) {
    this.repo.removeEvent(eventId).subscribe((response) => {
      console.log(response);
    });
  }
}
