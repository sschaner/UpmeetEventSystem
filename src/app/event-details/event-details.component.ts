import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  id: number = 1;
  faHome = faHome;
  faHeart = faHeart;

  eventDetails: IEvent | undefined;

  favoriteAnswers: string[] = ['Yes', 'No'];

  constructor(
    private repo: EventsRepositoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.eventDetails = this.repo.getEventDetails(this.id);
  }

  setFavorite(form: NgForm) {
    if (form.form.value.isFavorite.toLowerCase() === 'yes') {
      this.eventDetails!.favorited = true;
    } else if (form.form.value.isFavorite.toLowerCase() === 'no') {
      this.eventDetails!.favorited = false;
    }
  }
}
