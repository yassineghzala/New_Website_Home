import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { AssignmentService } from 'src/app/services/assignment.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  constructor(private aservice:AssignmentService,private active:ActivatedRoute,private mservice:MemberService){}
  connectedUser!: Member;
  assignments!:any
  ngOnInit(){
    this.aservice.getActiveAssignments().subscribe((res)=>{
      this.assignments=res
      console.log("ass",this.assignments);
    })
    const connectedUserId=this.active.snapshot.params['id'];
    this.mservice.getMemberById(connectedUserId).subscribe((res:any)=>{
      this.connectedUser=res[0]
      console.log("f west=",this.connectedUser)
    })
  }
}
