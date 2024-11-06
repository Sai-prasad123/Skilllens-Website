import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-linear-arrangment',
  templateUrl: './linear-arrangment.component.html',
  styleUrls: ['./linear-arrangment.component.css']
})
export class LinearArrangmentComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Linear Arrangement");
  }


  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
