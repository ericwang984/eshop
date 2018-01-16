import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private UserService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      // tslint:disable-next-line:curly
      if (!user) return;
      UserService.save(user);
      // tslint:disable-next-line:prefer-const
      let returnUrl = localStorage.getItem('returnUrl');
      // tslint:disable-next-line:curly
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);

    });
  }
}
