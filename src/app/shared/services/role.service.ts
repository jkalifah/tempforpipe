import { Injectable, signal } from '@angular/core';
import { Role } from '../models/role.model';
import {roles } from '../role_list';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private Roles = signal<Role[]>(roles);

  allRoles = this.Roles.asReadonly();
  
  constructor() { }
}
