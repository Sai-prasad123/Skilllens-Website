import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewPresentationComponent } from './interview-presentation/interview-presentation.component';

const routes: Routes = [
  { path: '', component: InterviewPresentationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewPresentationRoutingModule { }
