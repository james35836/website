import { Component, OnInit } 		from '@angular/core';
import { NgForm }                  	from '@angular/forms';
import { HttpClient, HttpHeaders } 	from '@angular/common/http';
import { BackendServiceService }   	from '../backend-service.service';
import { Observable } 				from 'rxjs';
import { catchError } 				from 'rxjs/operators';
import * as $ 						from 'jquery';

@Component({
  	selector: 		'app-register',
  	templateUrl: 	'./register.component.html',
  	styleUrls: 		['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
	registerInfo = {};
  	constructor(public rest: BackendServiceService, private http: HttpClient) { }

  	ngOnInit() 
  	{

  	}
  	onRegisterSubmit()
  	{
  		this.http.post(this.rest.api_url + "/api/register_submit", this.registerInfo)
      	.subscribe(res=>
      	{
          	console.log(res);
      	});
  	}

}
