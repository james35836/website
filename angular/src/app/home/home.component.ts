import { Component, OnInit }       from '@angular/core';
import { NgForm }                  from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { BackendServiceService }   from '../backend-service.service';

import * as $ from 'jquery';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
    title = 'My First Angular App!';
    name  = 'James Omosora';
  
  	dd_url : string;
    dd_urls : string;
    james = {};
    jam  = {};
    data = {};
    jamess = {};
    

    constructor(public rest: BackendServiceService, private http: HttpClient) { }


  ngOnInit() 
  {

  
  	// this.dd_url = this.rest.api_url + "/api/dd";
  	
  
  	// this.http.get(this.dd_url).subscribe(data=>{ 
  	
  	// 	this.james = data; 
  	// });
    

  }

  doPOST() 
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
