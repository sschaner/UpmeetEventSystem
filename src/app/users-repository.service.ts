import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersRepositoryService {
  private localHostNumber = 44381;
  private apiUri: string = `https://localhost:${this.localHostNumber}/api/user`;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUri);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUri}/${id}`);
  }
}
