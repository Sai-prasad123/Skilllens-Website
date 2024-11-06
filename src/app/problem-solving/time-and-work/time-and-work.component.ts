import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-time-and-work',
  templateUrl: './time-and-work.component.html',
  styleUrls: ['./time-and-work.component.css']
})
export class TimeAndWorkComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Time and Work");
  }


  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
