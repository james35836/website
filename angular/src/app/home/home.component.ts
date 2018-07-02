import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BackendServiceService } from '../backend-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'My First Angular App!';
  name  = 'James Omosora';
  
  	dd_url : string;
   dd_urls : string;
   james = {};
   jam  = {};
  constructor(public rest: BackendServiceService, private http: HttpClient) { }

  ngOnInit() 
  {
  	
  	this.dd_url = this.rest.api_url + "/api/dd";
  	this.dd_urls = this.rest.api_url + "/james";
  
  	this.http.get(this.dd_url).subscribe(data=>{ 
  	
  		this.james = data; 
  	});

 
  	
  	
  }

}


 
