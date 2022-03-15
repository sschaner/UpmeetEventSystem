import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRepositoryService } from '../users-repository.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userId: number = 1;
  users: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private repo: UsersRepositoryService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.repo.getUsers().subscribe((response) => {
      this.users = response;
    });
    this.repo.getUserById(this.userId).subscribe((response) => {
      this.user = response;
    });
  }
}
