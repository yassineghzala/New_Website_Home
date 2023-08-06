import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { AssignmentService } from 'src/app/services/assignment.service';
import { MemberService } from 'src/app/services/member.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  constructor(private active:ActivatedRoute,private aservice:AssignmentService,private mservice:MemberService){}
  currentAssignment!:Assignment
  currentUser!:Member
  ngOnInit(){
    const assignmentId=this.active.snapshot.params['aid'];
    this.aservice.getAssignmentById(assignmentId).subscribe((res)=>{
      this.currentAssignment=res[0];
      console.log('assignment',this.currentAssignment);
    })
    const userId=this.active.snapshot.params['id'];
    this.mservice.getMemberById(userId).subscribe((res)=>{
      this.currentUser=res[0]
    })
  }
  assignmentDone(){

  }
}
