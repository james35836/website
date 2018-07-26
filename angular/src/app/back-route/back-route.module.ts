import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } 		from '../app.component';

import { DashboardComponent } 		from '../backend/dashboard/dashboard.component';

import { AlumniLayoutComponent }from '../backend/alumni-layout/alumni-layout.component';
const routes: Routes = [
{ 
	path: '', component: AlumniLayoutComponent, children:
	[
	    {path: 'dashboard', redirectTo: 'dashboard', pathMatch:'full'},
		{path: 'dashboard', component: DashboardComponent },
		
	]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BackRouteModule { }

