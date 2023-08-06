import { Component } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent {
  members:any
  tasks:any
  constructor(private uservice:UsersService,private tservice:AssignmentService){}
  ngOnInit(){
    this.getAllMembers()
    this.getAllTasks()
  }
  getAllMembers(){
    this.uservice.getUsers().subscribe((res)=>{
      this.members=res
      console.log("members=",this.members);
    })
  }
  getAllTasks(){
    this.tservice.getAllAssignments().subscribe((res)=>{
      this.tasks=res
      console.log("tasks",this.tasks);
      
    })
  }
}
