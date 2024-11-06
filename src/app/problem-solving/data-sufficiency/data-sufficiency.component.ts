import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-data-sufficiency',
  templateUrl: './data-sufficiency.component.html',
  styleUrls: ['./data-sufficiency.component.css']
})
export class DataSufficiencyComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Data-sufficiency");
  }
ngOnInit(): void {
  }
scroll(el:any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }


}