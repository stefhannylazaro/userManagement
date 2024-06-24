import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  getUsers() {
    return this.http.get<any>(`https://randomuser.me/api/`);
  }

}
