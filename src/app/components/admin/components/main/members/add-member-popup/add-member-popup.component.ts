import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.css']
})
export class AddMemberPopupComponent {
  newMember!:FormGroup
  member!:Member
  constructor(private memberService:MemberService,private formBuilder:FormBuilder){}
  ngOnInit() {
    this.newMember=this.formBuilder.group({
      name:[""],
      username:[""],
      birthday:[""],
      role:[""],
      password:[""],
      Mscore:[""],
      cin:[""],
      phone:[""],
      pdp:[""],
      mail:[""],
      idDepart:[]
    })
  }
  addMember(){
    this.member=this.newMember.value;
    this.member.username=this.member.name;
    this.member.password=this.member.name;
    this.member.name=this.member.name;
    this.member.score=0;
    this.member.Mscore=0;
    this.member.role="member"
    console.log("ahawa",this.member);
    this.memberService.addMember(this.member).subscribe((res)=>{
      console.log("member added",this.member);
      
    })
  }
}
