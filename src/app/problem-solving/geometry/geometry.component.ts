import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - geometry");
  }
ngOnInit(): void {
  }
scroll(el:any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }


}
