import { Component, OnInit, TemplateRef } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})

export class LoginPopupComponent implements OnInit {
  loginForm!:FormGroup
  loginUser!:any
  constructor(private FormBuilder:FormBuilder,private Uservices:UsersService,private route:Router,private dialogRef: MatDialog){}


  
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
      
      if (this.loginUser.password==res.password) {
        console.log("connected");
        if (res.role=="admin") {
          this.route.navigate(["admin/",res.id]);
        }  
        else{
          this.route.navigate(["user/",res.id]);
        }
      }
      else{
        console.log("mdp incorrect");
      }
    })
  }
  openRegisterPopup(){
    this.dialogRef.open(RegisterComponent);
  }
}
