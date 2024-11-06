import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { DataPolicyComponent } from './data-policy/data-policy.component';
import { SubsscriptionPolicyComponent } from './subsscription-policy/subsscription-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { EAssessmentComponent } from './e-assessment/e-assessment.component';
import { FreshersRecruitmentComponent } from './freshers-recruitment/freshers-recruitment.component';
import { FinishingSchoolComponent } from './finishing-school/finishing-school.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CampusRecruitmentTrainingComponent } from './campus-recruitment-training/campus-recruitment-training.component';
import { CompanySpecificTrainingComponent } from './company-specific-training/company-specific-training.component';
import { HiringAssessmentsComponent } from './hiring-assessments/hiring-assessments.component';
import { WorkshopsSeminarsComponent } from './workshops-seminars/workshops-seminars.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { RecruitingCompaniesComponent } from './recruiting-companies/recruiting-companies.component';
import { VoiceOfIndustryComponent } from './voice-of-industry/voice-of-industry.component';
import { CodingJavaComponent } from './coding-java/coding-java.component';
import { CodingCsharpComponent } from './coding-csharp/coding-csharp.component';
import { CodingPythonComponent } from './coding-python/coding-python.component';
import { BusinessAnalystComponent } from './business-analyst/business-analyst.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { AiMlComponent } from './ai-ml/ai-ml.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'data-policy', component: DataPolicyComponent },
  { path: 'subscription-policy', component: SubsscriptionPolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'e-learning', component: ELearningComponent },
  { path: 'e-assessment', component: EAssessmentComponent },
  { path: 'freshers-recruitment', component: FreshersRecruitmentComponent },
  { path: 'finishing-school', component: FinishingSchoolComponent },
  { path: 'campus-recruitment-training', component: CampusRecruitmentTrainingComponent },
  { path: 'company-specific-training', component: CompanySpecificTrainingComponent },
  { path: 'hiring-assessments', component: HiringAssessmentsComponent },
  { path: 'workshops-seminars', component: WorkshopsSeminarsComponent },
  { path: 'corporate-training', component: CorporateTrainingComponent },
  { path: 'recruiting-companies', component: RecruitingCompaniesComponent },
  { path: 'voice-of-industry', component: VoiceOfIndustryComponent },
  { path: 'coding-with-java', component: CodingJavaComponent },
  { path: 'coding-with-csharp', component: CodingCsharpComponent },
  { path: 'coding-with-python', component: CodingPythonComponent },
  { path: 'business-analyst', component: BusinessAnalystComponent },
  { path: 'data-science', component: DataScienceComponent },
  { path: 'ai-ml', component: AiMlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
