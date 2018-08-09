import { NgModule } 			from '@angular/core';
import { CommonModule } 		from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } 		from '../app.component';




import { HomeComponent } 		from '../frontend/home/home.component';
import { EventComponent } 	from '../frontend/event/event.component';
import { JobComponent } 	from '../frontend/job/job.component';
import { AboutComponent } 	from '../frontend/about/about.component';
import { ContactComponent } 	from '../frontend/contact/contact.component';
import { LoginComponent } 	from '../frontend/login/login.component';



import { FrontendLayoutComponent }from '../frontend/frontend-layout/frontend-layout.component';

const routes: Routes = [
{ 
	path: '', component: FrontendLayoutComponent, children:
	[
	    {path: '', redirectTo: 'home', pathMatch:'full'},
		{path: 'home', component: HomeComponent },
		{path: 'event', component: EventComponent },
		{path: 'job', component: JobComponent },
		{path: 'about', component: AboutComponent },
		{path: 'contact', component: ContactComponent },
		{path: 'login', component: LoginComponent },

	]
	
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontRouteModule { }





