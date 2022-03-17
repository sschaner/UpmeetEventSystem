import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faCircleInfo,
  faHome,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { EventsRepositoryService } from '../events-repository.service';

@Component({
  selector: 'app-favorite-events',
  templateUrl: './favorite-events.component.html',
  styleUrls: ['./favorite-events.component.css'],
})
export class FavoriteEventsComponent implements OnInit {
  userId: number = 1;
  events: any;
  favoriteEvents: any;

  // Fontawesome Icons
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faHome = faHome;

  constructor(
    private repo: EventsRepositoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.events = this.repo.getEvents();
    this.repo.getFavoriteEventsByUserId(this.userId).subscribe((response) => {
      this.favoriteEvents = response;
    });
  }
}
