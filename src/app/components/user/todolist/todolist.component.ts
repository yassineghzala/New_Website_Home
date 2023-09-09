import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { AssignmentService } from 'src/app/services/assignment.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private aservice: AssignmentService, private active: ActivatedRoute, private mservice: MemberService) { }
  connectedUser!: Member;
  assignments!: any
  ngOnInit() {
    this.aservice.getAllAssignments().subscribe((res) => {
      this.assignments = res
      console.log("ass", this.assignments);
      const connectedUserId = this.active.snapshot.params['id'];
      this.mservice.getMemberById(connectedUserId).subscribe((res: any) => {
        this.connectedUser = res
        console.log("f west=", this.connectedUser)
      })
    })

  }
}
