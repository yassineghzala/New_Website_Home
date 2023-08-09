import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
