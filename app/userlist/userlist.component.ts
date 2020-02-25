
import { Component, OnInit } from '@angular/core';  
import { UserService } from '../user.service';  
import { User } from '../user';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserListComponent implements OnInit {  
  
 constructor(private userservice:UserService) { }  
  
userList: Observable<any []>;   
   
  
  ngOnInit() {  
     
    this.userservice.getAllUsers().subscribe(data =>{  
    this.userList =data;  
  
    })  
  }  
    
  

  
  
}  
