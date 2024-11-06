import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blood-relations',
  templateUrl: './blood-relations.component.html',
  styleUrls: ['./blood-relations.component.css']
})
export class BloodRelationsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { 
    this.titleService.setTitle("SkillLens - blood relation");
  }

  ngOnInit(): void {
  }
  scroll(el:any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}