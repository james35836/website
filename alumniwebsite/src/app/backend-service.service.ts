import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BackendServiceService {
  	api_url : any;
  	constructor(private http: HttpClient) 
  	{
  		this.api_url = "http://website.test";
  	}
}
