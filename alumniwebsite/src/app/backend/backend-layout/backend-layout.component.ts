import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import $ from 'jquery/dist/jquery';
@Component({
  	selector: 'app-backend-layout',
  	templateUrl: './backend-layout.component.html',
  	styleUrls: ['./backend-layout.component.scss']
})
export class BackendLayoutComponent implements OnInit 
{

  	constructor() { }

  	ngOnInit() 
  	{
	  	$(document).ready(function()
	  	{
	        $('[data-toggle=sidebar-colapse]').click(function() 
			{
			    SidebarCollapse();
			});
			$('#collapse-icon').addClass('fa-angle-double-left'); 

			function SidebarCollapse () 
		  	{
			    $('.menu-collapsed').toggleClass('d-none');
			    $('.sidebar-submenu').toggleClass('d-none');
			    $('.submenu-icon').toggleClass('d-none');
			    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
			    
			    // Treating d-flex/d-none on separators with title
			    var SeparatorTitle = $('.sidebar-separator-title');
			    if ( SeparatorTitle.hasClass('d-flex') ) 
			    {
			        SeparatorTitle.removeClass('d-flex');
			        $('.img-display').removeClass('user-img-uncollapse').addClass('user-img-collapse');
			    } 
			    else 
			    {
			        SeparatorTitle.addClass('d-flex');
			        $('.img-display').removeClass('user-img-collapse').addClass('user-img-uncollapse');
			    }
			    
			    // Collapse/Expand icon
			    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
			}  
	    });

  	
// $('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon


// Collapse click

  }

}
