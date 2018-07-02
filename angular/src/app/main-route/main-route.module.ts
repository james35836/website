import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
{ 
	path: '', component: LayoutComponent, children:
	[
	    {path: '', redirectTo: 'home', pathMatch:'full'},
		{path: 'home', component: HomeComponent },
		{path: 'about', component: AboutComponent},
	]}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouteModule { }
