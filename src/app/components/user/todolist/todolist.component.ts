import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private aservice:AssignmentService){}
  assignments!:any
  ngOnInit(){
    this.aservice.getActiveAssignments().subscribe((res)=>{
      this.assignments=res
      console.log("ass",this.assignments);
    })

  }
}
