import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - averages");
  }

  ngOnInit(): void {
  }

  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

}