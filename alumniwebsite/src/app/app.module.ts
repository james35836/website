import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { BackendServiceService } from './backend-service.service';

import { FrontRouteModule } from './front-route/front-route.module';
import { BackRouteModule } from './back-route/back-route.module';


import { BackendLayoutComponent } from './backend/backend-layout/backend-layout.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

import { FrontendLayoutComponent } from './frontend/frontend-layout/frontend-layout.component';
import { HomeComponent } from './frontend/home/home.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { AboutComponent } from './frontend/about/about.component';
import { EventComponent } from './frontend/event/event.component';
import { JobComponent } from './frontend/job/job.component';
import { LoginComponent } from './frontend/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    BackendLayoutComponent,
    DashboardComponent,
    FrontendLayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    EventComponent,
    JobComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FrontRouteModule,
    BackRouteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendServiceService],
  bootstrap: [AppComponent]

  
})
export class AppModule { }


