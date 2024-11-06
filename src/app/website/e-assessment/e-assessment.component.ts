import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-e-assessment',
  templateUrl: './e-assessment.component.html',
  styleUrls: ['./e-assessment.component.css']
})
export class EAssessmentComponent {
  constructor(private router: Router, private titleService: Title, private meta: Meta) {

    this.titleService.setTitle("e-assessments | Best online Assessment Platform |Online Examination Platform");
    this.meta.updateTag({ name: 'description', content: 'Are you searching Online Exam Platform? The Skill Lens is recognized as Best Test Platform to build skills required for tomorrow. Our Platform covers types of Competitive and Govt Exams Mock Tests as per Latest exam pattern and guidelines. Sign Up to improve Skills to Pass an Exam.' });
    this.meta.updateTag({ name: 'keywords', content: 'top online assessment program, Online Examination Platform, Online Tests Platform' })

    router.events.subscribe((s: any) => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          let el = document.getElementById("mockassessments") as any;
          el.scrollIntoView(true);
          window.scrollBy(0, -80);
        }
      }
    });
  }

  ngOnInit(): void {

  }





}
