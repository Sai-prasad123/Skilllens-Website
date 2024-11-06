import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { WEBSITE_ROUTES } from './routing/website-layout-routing';

const routes: Routes = [
  { path: '', component: WebsiteLayoutComponent, children: WEBSITE_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
