import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent {
  loading = true;
  loginService: any;
  constructor(
    // public loginService: LoginService, 
    private _router: Router
  ) {
    this._router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    });
  }

  ngOnInit(): void {
    // this.loginService.setCartSize();
  }



  // Shows and hides the loading spinner during RouterEvent changes
  public navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}