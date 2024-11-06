import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-permutations-and-combinations',
  templateUrl: './permutations-and-combinations.component.html',
  styleUrls: ['./permutations-and-combinations.component.css']
})
export class PermutationsAndCombinationsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - permutations-and-combinations");
  }
  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}