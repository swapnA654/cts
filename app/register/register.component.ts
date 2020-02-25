import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';   
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email: any;  
  
  constructor(private userservice:UserService) { }  
  
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  usersaveform=new FormGroup({ 
    id:new FormControl(), 
    confirmed:new FormControl(), 
    password:new FormControl(), 
    userName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    userType:new FormControl(),
    mobileNumber:new FormControl(),
  

  });  
  
  saveUser(saveUser){  
    this.user=new User();   
    this.user.id=this.Id.value;  
    this.user.userName=this.userName.value;  
    this.user.email=this.Email.value;  
    this.user.userType=this.userType.value; 
    this.user.password=this.password.value;
    this.user.mobileNumber=this.mobileNumber.value;
    this.user.confirmed=this.confirmed.value;

    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userservice.saveUser(this.user)  
    .subscribe(data => console.log(data), error => console.log(error));


    this.user = new User();  
  }  
  get Id(){  
    return this.usersaveform.get('id');  
  } 
  
  get userName(){  
    return this.usersaveform.get('userName');  
  }  
  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  
  
  get userType(){  
    return this.usersaveform.get('userType');  
  }  
  get password(){  
    return this.usersaveform.get('password');  
  } 
  get mobileNumber(){  
    return this.usersaveform.get('mobileNumber');  
  } 
  get confirmed(){  
    return this.usersaveform.get('confirmed');  
  } 
  
  saveUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  }  
}  
