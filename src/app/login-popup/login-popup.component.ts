import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})

export class LoginPopupComponent implements OnInit {
  loginForm!:FormGroup
  loginUser!:any
  constructor(private FormBuilder:FormBuilder,private Uservices:UsersService,private route:Router){}


  ngOnInit() {
    this.loginForm=this.FormBuilder.group({
      username:[""],
      password:[""]
    })


  }
  login(){
    this.loginUser=this.loginForm.value;
    console.log("here",this.loginUser);
    this.Uservices.getUserByUsername(this.loginUser.username).subscribe((res)=>{
      console.log(res);
      
      if (this.loginUser.password==res[0].password) {
        console.log("connected");
        if (res[0].role=="admin") {
          this.route.navigate(["admin/",res[0].id]);
        }  
        else{
          this.route.navigate(["user/",res[0].id]);
        }
      }
      else{
        console.log("mdp incorrect");
      }
    })
  }


  
}
