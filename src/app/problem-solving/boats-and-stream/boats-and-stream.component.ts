import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-boats-and-stream',
  templateUrl: './boats-and-stream.component.html',
  styleUrls: ['./boats-and-stream.component.css']
})
export class BoatsAndStreamComponent implements OnInit {


  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("SkillLens - boats and streams");
  }



  ngOnInit(): void {
  }
  scroll(el: any) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
