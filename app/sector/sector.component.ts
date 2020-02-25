import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  
  constructor(private sectorservice:SectorService) { }  
  
  sector : Sector=new Sector();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  sectorsaveform=new FormGroup({ 
    id:new FormControl(), 
    sectorName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    brief:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    

  });  
  
  saveSectors(saveSectors){  
    this.sector=new Sector();   
    this.sector.id=this.Id.value;  
    this.sector.sectorName=this.SectorName.value;  
    this.sector.brief=this.Brief.value;  
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.sectorservice.saveSectors(this.sector)  
    .subscribe(data => console.log(data), error => console.log(error));


    this.sector = new Sector();  
  }  
  get Id(){  
    return this.sectorsaveform.get('id');  
  } 
  
  get SectorName(){  
    return this.sectorsaveform.get('sectorName');  
  }  
  
  get Brief(){  
    return this.sectorsaveform.get('brief');  
  }  
  
  
  
  saveSectorForm(){  
    this.submitted=false;  
    this.sectorsaveform.reset();  
  }  
}  

