import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsRepositoryService } from '../events-repository.service';
import { IEvent } from '../interfaces/IEvent';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  id: number = 1;
  users: IUser[] = [];
  events: IEvent[] = [];

  constructor(
    private route: ActivatedRoute,
    private repo: EventsRepositoryService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.events = this.repo.getEvents();
  }
}
