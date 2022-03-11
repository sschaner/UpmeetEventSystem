import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../interfaces/IEvent';
import { IUser } from '../interfaces/IUser';
import { UsersRepositoryService } from '../users-repository.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userId: number = 1;
  // users: IUser[] = [];
  events: IEvent[] = [];
  users: any;

  constructor(
    private route: ActivatedRoute,
    private repo: UsersRepositoryService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.users = this.repo.getUsers();
  }
}
