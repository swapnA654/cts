import { Component, OnInit } from '@angular/core';
import { ManageexchangeService } from '../manageexchange.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manageexchangelist',
  templateUrl: './manageexchangelist.component.html',
  styleUrls: ['./manageexchangelist.component.css']
})
export class ManageexchangelistComponent implements OnInit {
  
  constructor(private manageexchangeservice:ManageexchangeService) { }  
   
 manageexchangeList: Observable<any []>;   
    
   
   ngOnInit() {  
      
     this.manageexchangeservice.getAllStockExchange().subscribe(data =>{  
     this.manageexchangeList =data;  
   
     })  
   }  
  }
