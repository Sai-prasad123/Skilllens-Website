import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ages',
  templateUrl: './ages.component.html',
  styleUrls: ['./ages.component.css']
})
export class AgesComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - ages");
  }

  ngOnInit(): void {
  }

  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
