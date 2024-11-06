import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.css']
})
export class ELearningComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("e-learning | Best Learning Portal | best online learning platform");
    this.meta.updateTag({ name: 'description', content: 'Advance your career with Skill Lens Online elearning courses in programming,Problem Solving and Employability Skills taught by Best Corporate Professionals, Academic Professors and Motivational Speakers.Our Platform helps all type career aspirants to build skills for Tomorrow.' });
    this.meta.updateTag({ name: 'keywords', content: ' best online learning platform, top online learning site, best e-learning app, Best Learning Portal' })
  }

  ngOnInit(): void {
  }

}
