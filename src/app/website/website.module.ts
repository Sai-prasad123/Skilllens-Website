import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyMaterialModule } from '../my-material/my-material.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    DataPolicyComponent,
    SubsscriptionPolicyComponent,
    DisclaimerComponent,
    ELearningComponent,
    EAssessmentComponent,
    FreshersRecruitmentComponent,
    FinishingSchoolComponent,
    LeadershipComponent,
    CampusRecruitmentTrainingComponent,
    CompanySpecificTrainingComponent,
    HiringAssessmentsComponent,
    WorkshopsSeminarsComponent,
    CorporateTrainingComponent,
    RecruitingCompaniesComponent,
    VoiceOfIndustryComponent,
    CodingJavaComponent,
    CodingCsharpComponent,
    CodingPythonComponent,
    BusinessAnalystComponent,
    DataScienceComponent,
    AiMlComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MyMaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class WebsiteModule { }
