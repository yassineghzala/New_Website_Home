import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { MemberService } from 'src/app/services/member.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
settingsForm!:FormGroup
  newSettings!:any
  currentUser!:Member
  constructor(private mservice:MemberService,private formBuilder:FormBuilder,private uservice:UsersService,private active:ActivatedRoute){}
ngOnInit(){
  this.settingsForm=this.formBuilder.group({
    name:[""],
    username:[""],
    mail:[""],
    password:[""]
  })
  const connectedUserId=this.active.snapshot.params['id'];
  this.mservice.getMemberById(connectedUserId).subscribe((res)=>{
    this.currentUser=res
    console.log("f west=",this.currentUser)
  })
}
editProfile(){
  this.newSettings=this.settingsForm.value;
  this.currentUser.name=this.newSettings.name
  this.currentUser.username=this.newSettings.username
  this.currentUser.mail=this.newSettings.mail
  this.currentUser.password=this.newSettings.password
}


}
