import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { LeadsBannerComponent } from './leads-banner/leads-banner.component';
import { LeadsListComponent } from './leads-banner/leads-list/leads-list.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'product-demo', component: LeadsBannerComponent },
  {
    path: 'leads-list',
    component: LeadsListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
