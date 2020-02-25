import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})

export class StockPriceService {

  private baseUrl = 'http://localhost:8087/stockprice/';
  

  
  constructor(private http:HttpClient) { }  
  
  getAllStockPrice(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllStockPrice');  
  }  
  
  saveStockPrice(stockprice: any): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveStockPrice', stockprice);  
  }  
  
  deleteStockPrice(companyCode: String): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteStockPrice/${companyCode}`, { responseType: 'text' });  
  }  
  
  findOneInAll5(companyCode: String): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/findOneInAll5/${companyCode}`);  
  }  
  
  updateStockPrice(companyCode: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateStockPrice/${companyCode}`, value);  
  }  
    
}  