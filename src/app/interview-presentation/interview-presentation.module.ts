import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewPresentationRoutingModule } from './interview-presentation-routing.module';
import { InterviewPresentationComponent } from './interview-presentation/interview-presentation.component';


@NgModule({
  declarations: [
    InterviewPresentationComponent
  ],
  imports: [
    CommonModule,
    InterviewPresentationRoutingModule
  ]
})
export class InterviewPresentationModule { }
