import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-circular-arrangement',
  templateUrl: './circular-arrangement.component.html',
  styleUrls: ['./circular-arrangement.component.css']
})
export class CircularArrangementComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { 
    this.titleService.setTitle("SkillLens - Circular Arrangement");
  }

  ngOnInit(): void {
  }
  scroll(el:any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
