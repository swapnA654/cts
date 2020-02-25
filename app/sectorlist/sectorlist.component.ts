import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {
  
  constructor(private sectorservice:SectorService) { }  
   
 sectorList: Observable<any []>;   
    
   
   ngOnInit() {  
      
     this.sectorservice.getAllSectors().subscribe(data =>{  
     this.sectorList =data;  
   
     })  
   }  
  }