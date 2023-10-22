import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
import { Member } from 'src/app/models/member';
import { AssignmentService } from 'src/app/services/assignment.service';
import { DepoService } from 'src/app/services/depo.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  constructor(private active:ActivatedRoute,private aservice:AssignmentService,private mservice:MemberService,private depoService:DepoService){}
  currentAssignment!:Assignment
  currentUser!:Member
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
  assignmentDone(work:string){
    console.log("current idddd",this.currentAssignment);
    console.log("sss",work);
    
    this.depoService.addWork(this.currentUser.id,this.currentAssignment.id,work).subscribe((res)=>{
      console.log("work added",res);
      
    })
  }
}
