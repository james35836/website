import { Component, OnInit } 		    from '@angular/core';
import { NgForm }                  	from '@angular/forms';
import { HttpClient, HttpHeaders } 	from '@angular/common/http';
import { BackendServiceService }   	from '../backend-service.service';
import { Observable } 				      from 'rxjs';
import { catchError } 				      from 'rxjs/operators';
import * as $ 						          from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
	loginInfo = {};

  	constructor(public rest: BackendServiceService, private http: HttpClient) { }

  	ngOnInit() 
  	{

  	}
  	onLoginSubmit()
  	{
  		var params = {};
      params["name"] = "james";
      params["age"] = 23;
      console.log(params);
      this.http.post(this.rest.api_url + "/api/try", params).subscribe(res=>
      {
          console.log(res);
      });
  	}

}
