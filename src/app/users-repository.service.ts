import { Injectable } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersRepositoryService {
  // Mock data
  users: IUser[] = [
    {
      userId: 1,
      name: 'Son Goku',
    },
    {
      userId: 2,
      name: 'Bulma',
    },
    {
      userId: 3,
      name: 'Krillin',
    },
    {
      userId: 4,
      name: 'Piccolo',
    },
    {
      userId: 5,
      name: 'Son Gohan',
    },
    {
      userId: 6,
      name: 'Vegeta',
    },
    {
      userId: 7,
      name: 'Bardock',
    },
    {
      userId: 8,
      name: 'Trunks',
    },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
}
