import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Departement } from 'src/app/models/departement';
import { Member } from 'src/app/models/member';
import { DepartService } from 'src/app/services/depart.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.css']
})
export class AddMemberPopupComponent {
  newMember!:FormGroup
  member!:Member
  departs!:Departement[]
  constructor(private memberService:MemberService,private formBuilder:FormBuilder,private dService: DepartService,private dialogRef: MatDialog){}
  ngOnInit() {
    this.dService.getAllDeparts().subscribe((res)=>{
      this.departs=res
    })
    this.newMember=this.formBuilder.group({
      name:[""],
      birthday:[""],
      role:[""],
      cin:[""],
      phone:[""],
      pdp:[""],
      mail:[""],
    })
  }
  addMember(idDepart:string){
    this.member=this.newMember.value;
    this.member.score=0;
    this.member.Mscore=[];
    this.member.role="member"
    console.log("ahawa",this.member);
    this.memberService.addMember(parseInt(idDepart),this.member).subscribe((res)=>{
      console.log("member added",this.member);
      this.dialogRef.closeAll()
    })
  }
}
