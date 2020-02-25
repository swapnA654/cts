import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { StockPriceService } from '../stockprice.service';


@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {
  stockpriceList: any;



  
  constructor(private stockpriceservice:StockPriceService) { }  
   
 sectorList: Observable<any []>;   
    
   
   ngOnInit() {  
      
     this.stockpriceservice.getAllStockPrice().subscribe(data =>{  
     this.stockpriceList =data;  
   
     })  
   }  
  }