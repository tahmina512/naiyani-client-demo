import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AppRoutingModule } from './app.routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeadsBannerComponent } from './leads-banner/leads-banner.component';
import { LeadsListComponent } from './leads-banner/leads-list/leads-list.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    LeadsBannerComponent,
    LeadsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
