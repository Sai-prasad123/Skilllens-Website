import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkillLensWeb';

  static isBrowser = new BehaviorSubject<boolean>(false);


  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
  // Sets initial value to true to show loading spinner on first load
  loading = true

  constructor(
    private _router: Router,
    private canonicalService: CanonicalService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

    this._router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    })
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
  }


  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
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
