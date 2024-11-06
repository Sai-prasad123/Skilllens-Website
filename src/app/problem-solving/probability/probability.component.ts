import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-probability',
  templateUrl: './probability.component.html',
  styleUrls: ['./probability.component.css']
})
export class ProbabilityComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - probability");
  }
  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}