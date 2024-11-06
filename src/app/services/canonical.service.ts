import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom: any) { }

  setCanonicalURL(url?: string) {
    let canURL = url == undefined ? this.dom.URL : url;
    let u = canURL.replace('http://', 'https://')
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', u);

  }
}