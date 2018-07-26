import { NgModule } 			from '@angular/core';
import { CommonModule } 		from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } 		from '../app.component';

import { HomeComponent } 		from '../home/home.component';
import { AboutComponent } 		from '../about/about.component';
import { ProgramsComponent } 	from '../programs/programs.component';
import { AlumniComponent } 		from '../alumni/alumni.component';
import { CarrerComponent } 		from '../carrer/carrer.component';
import { LoginComponent } 		from '../login/login.component';
import { RegisterComponent } 	from '../register/register.component';
import { LayoutComponent } 		from '../layout/layout.component';


import { AlumniLayoutComponent }from '../backend/alumni-layout/alumni-layout.component';

const routes: Routes = [
{ 
	path: '', component: LayoutComponent, children:
	[
	    {path: '', redirectTo: 'home', pathMatch:'full'},
		{path: 'home', component: HomeComponent },
		{path: 'about', component: AboutComponent},
		{path: 'program', component: ProgramsComponent},
		{path: 'alumni', component: AlumniComponent},
		{path: 'carrer', component: CarrerComponent},
		{path: 'login', component: LoginComponent},
		{path: 'register', component: RegisterComponent},
	]
	
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouteModule { }
