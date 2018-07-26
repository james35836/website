import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { BackendServiceService } from './backend-service.service';

import { MainRouteModule } from './main-route/main-route.module';
import { BackRouteModule } from './back-route/back-route.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProgramsComponent } from './programs/programs.component';
import { AlumniComponent } from './alumni/alumni.component';
import { CarrerComponent } from './carrer/carrer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AlumniLayoutComponent } from './backend/alumni-layout/alumni-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LayoutComponent,
    ProgramsComponent,
    AlumniComponent,
    CarrerComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlumniLayoutComponent,
  ],
  imports: [
    BrowserModule,
    MainRouteModule,
    BackRouteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendServiceService],
  bootstrap: [AppComponent]

  
})
export class AppModule { }


