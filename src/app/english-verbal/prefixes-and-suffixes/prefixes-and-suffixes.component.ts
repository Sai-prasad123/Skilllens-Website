import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prefixes-and-suffixes',
  templateUrl: './prefixes-and-suffixes.component.html',
  styleUrls: ['./prefixes-and-suffixes.component.css']
})
export class PrefixesAndSuffixesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - Prefixes and Suffixes");
  }

  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

}
