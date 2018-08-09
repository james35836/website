
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } 		from '../app.component';

import { DashboardComponent } 		from '../backend/dashboard/dashboard.component';

import { BackendLayoutComponent }from '../backend/backend-layout/backend-layout.component';
const routes: Routes = [
{ 
	path: '', component: BackendLayoutComponent, children:
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

