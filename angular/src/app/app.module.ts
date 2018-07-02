import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BackendServiceService } from './backend-service.service';

import { MainRouteModule } from './main-route/main-route.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    MainRouteModule,
    HttpClientModule,
  ],
  providers: [BackendServiceService],
  bootstrap: [AppComponent]

  
})
export class AppModule { }


