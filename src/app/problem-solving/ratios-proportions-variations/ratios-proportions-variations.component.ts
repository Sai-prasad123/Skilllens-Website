import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ratios-proportions-variations',
  templateUrl: './ratios-proportions-variations.component.html',
  styleUrls: ['./ratios-proportions-variations.component.css']
})
export class RatiosProportionsVariationsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Ratios Proportions variations");
  }

  ngOnInit(): void {
  }

  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
