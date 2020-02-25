import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { ManageexchangeService } from '../manageexchange.service';
import { Manageexchange } from '../manageexchange';


@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {
  
  
  constructor(private manageexchangeservice:ManageexchangeService) { }  
  
  exchange : Manageexchange=new Manageexchange();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  exchangesaveform=new FormGroup({ 
    id:new FormControl(), 
    stockExchange:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    brief:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),   
    contactAddress:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    remarks:new FormControl('',[Validators.required,Validators.email]),  
    
  

  });  
  
  saveStockExchange(saveStockExchange){  
    this.exchange=new Manageexchange();   
    this.exchange.id=this.Id.value;  
    this.exchange.stockExchange=this.StockExchange.value;  
    this.exchange.brief=this.Brief.value;  
    this.exchange.contactAddress=this.ContactAddress.value; 
    this.exchange.remarks=this.Remarks.value;
    
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.manageexchangeservice.saveStockExchange(this.exchange)  
    .subscribe(data => console.log(data), error => console.log(error));


    this.exchange = new Manageexchange();  
  }  
  manageexchange(manageexchange: any) {
    throw new Error("Method not implemented.");
  }
  stockexchange(stockexchange: any) {
    throw new Error("Method not implemented.");
  }
  get Id(){  
    return this.exchangesaveform.get('id');  
  } 
  
  get StockExchange(){  
    return this.exchangesaveform.get('stockExchange');  
  }  
  
  get ContactAddress(){  
    return this.exchangesaveform.get('contactAddress');  
  }  
  
  
  get Remarks(){  
    return this.exchangesaveform.get('remarks');  
  }  
  get Brief(){  
    return this.exchangesaveform.get('brief');  
  }  
  
  saveexchangeForm()
  {
    this.submitted=false;
    this.exchangesaveform.reset();
  }
   
}  

