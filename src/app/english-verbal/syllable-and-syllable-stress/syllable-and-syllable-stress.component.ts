import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-syllable-and-syllable-stress',
  templateUrl: './syllable-and-syllable-stress.component.html',
  styleUrls: ['./syllable-and-syllable-stress.component.css']
})
export class SyllableAndSyllableStressComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Syllable and syllable stress");
  }

  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

}
