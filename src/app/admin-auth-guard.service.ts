import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.AppUser$
      .map(appUser => appUser.isAdmin);
  }

}
