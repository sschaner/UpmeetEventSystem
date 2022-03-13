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
  users: any;

  constructor(private repo: UsersRepositoryService, private router: Router) {}

  ngOnInit(): void {
    this.repo.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  setUser(form: NgForm) {
    this.router.navigate([`/users`, form.form.value.userId]);
  }
}
