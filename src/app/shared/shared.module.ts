import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { WebsiteFooterComponent } from './website-footer/website-footer.component';
import { MyMaterialModule } from '../my-material/my-material.module';


@NgModule({
  declarations: [
    WebsiteHeaderComponent,
    WebsiteFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MyMaterialModule
  ],
  exports: [WebsiteHeaderComponent, WebsiteFooterComponent]
})
export class SharedModule { }
