import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  bodyClasses = 'login-page';
  body = document.getElementsByTagName('body')[0];
  // icheck: JQuery;
  message: string;

  constructor(public authService: AuthService, public router: Router) { 
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
    // Add the login-page class to the body
    // $('body').addClass(this.bodyClasses);
    this.body.classList.add(this.bodyClasses);   // add the class

    /*this.icheck = jQuery("input").iCheck({
      checkboxClass: "icheckbox_square-blue",
      radioClass: "iradio_square-blue",
      increaseArea: "20%" // optional
    });*/
  }

  ngOnDestroy() {
    // remove the login-page class to the body
    // $('body').removeClass(this.bodyClasses);
    this.body.classList.remove(this.bodyClasses);
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/patients';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
