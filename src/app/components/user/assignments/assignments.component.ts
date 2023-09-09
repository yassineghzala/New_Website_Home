import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Depo } from 'src/app/models/Depo';
import { Assignment } from 'src/app/models/assignment';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { AssignmentService } from 'src/app/services/assignment.service';
import { DepoServiceService } from 'src/app/services/depo-service.service';
import { MemberService } from 'src/app/services/member.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  constructor(private active:ActivatedRoute,private aservice:AssignmentService,private mservice:MemberService,private depoService:DepoServiceService){}
  currentAssignment!:Assignment
  currentUser!:Member
  workDone!:Depo
  ngOnInit(){
    const assignmentId=this.active.snapshot.params['aid'];
    this.aservice.getAssignmentById(assignmentId).subscribe((res)=>{
      this.currentAssignment=res
      console.log('assignment',this.currentAssignment);
    })
    const userId=this.active.snapshot.params['id'];
    this.mservice.getMemberById(userId).subscribe((res)=>{
      this.currentUser=res
    })
  }
  assignmentDone(currentAssignment:Assignment){
    console.log("current idddd",this.currentAssignment);
    
    this.workDone.task=this.currentAssignment
    this.workDone.idMember=this.currentUser;
    this.workDone.work="work"
    this.depoService.addWork(this.workDone).subscribe((res)=>{
      console.log("work added",this.workDone);
      
    })
  }
}
