import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IContact } from '../website-footer/website-footer.component';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-website-header',
  templateUrl: './website-header.component.html',
  styleUrls: ['./website-header.component.css']
})
export class WebsiteHeaderComponent {
  cartSize = 0;
  loading = false;
  contact = {} as IContact;
  serverError: any;
  sentMail = false;
  isModalOpen = true;

  @ViewChild('btntoggle', { static: false })
  myDiv!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (event.target.className.indexOf('nav') == -1 && this.myDiv.nativeElement.getAttribute('aria-expanded') == 'true') {
      let el1: HTMLElement = this.myDiv.nativeElement;
      el1.click();
    }
  }

  constructor(
    private router: Router,
    private eRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        window.scrollTo(0, 0);
        return;
      }
      window.scrollTo(0, 0);
    });

  }

}
