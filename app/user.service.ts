import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {
  updateuser(id: number) {
    throw new Error("Method not implemented.");
  }
  getUser(id: number) {
    throw new Error("Method not implemented.");
  }
  getUserList() {
    throw new Error("Method not implemented.");
  }  
  
  private baseUrl = 'http://localhost:8087/user/';;  
  
  constructor(private http:HttpClient) { }  
  
  getAllUsers(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllUsers');  
  }  
  
  saveUser(User: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveUser', User);  
  }  
  
  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`, { responseType: 'text' });  
  }  
  
  findOneInAll6(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/findOneInAll6/${id}`);  
  }  
  
  updateUser(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/updateUser/${id}`, value);  
  }  
    
}  