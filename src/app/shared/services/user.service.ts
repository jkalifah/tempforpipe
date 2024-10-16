import { Injectable, signal } from '@angular/core';
import { users } from '../user_list';
import {User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Users = signal<User[]>(users);

  allUsers = this.Users.asReadonly();

  constructor() { }
}
