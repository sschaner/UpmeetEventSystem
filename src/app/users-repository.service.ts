import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersRepositoryService {
  // Mock data
  users: IUser[] = [
    {
      userId: 1,
      firstName: 'Son Goku',
      lastName: 'lastName1',
    },
    {
      userId: 2,
      firstName: 'Bulma',
      lastName: 'lastName2',
    },
    {
      userId: 3,
      firstName: 'Krillin',
      lastName: 'lastName3',
    },
    {
      userId: 4,
      firstName: 'Piccolo',
      lastName: 'lastName4',
    },
    {
      userId: 5,
      firstName: 'Son Gohan',
      lastName: 'lastName5',
    },
    {
      userId: 6,
      firstName: 'Vegeta',
      lastName: 'lastName6',
    },
    {
      userId: 7,
      firstName: 'Bardock',
      lastName: 'lastName7',
    },
    {
      userId: 8,
      firstName: 'Trunks',
      lastName: 'lastName8',
    },
  ];

  private apiUri: string = 'https://localhost:44381/api/user';

  constructor(private http: HttpClient) {}

  getUsers() {
    // return this.users;
    return this.http.get(this.apiUri);
  }
}
