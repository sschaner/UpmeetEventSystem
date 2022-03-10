import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IUser } from '../interfaces/IUser';
import { UsersRepositoryService } from '../users-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private repo: UsersRepositoryService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.repo.getUsers();
  }

  setUser(form: NgForm) {
    this.router.navigate([`/users`, form.form.value.userId]);
  }
}
