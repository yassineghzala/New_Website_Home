import { Component } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-recent-tasks',
  templateUrl: './recent-tasks.component.html',
  styleUrls: ['./recent-tasks.component.css']
})
export class RecentTasksComponent {
  recentDevTasks!:Assignment[]
  recentMediaTasks!:Assignment[]
  constructor(private tservice:AssignmentService){}
  ngOnInit(){
    this.tservice.getAssignmentByDep(1).subscribe((res)=>{
      this.recentDevTasks=res
    })
    this.tservice.getAssignmentByDep(2).subscribe((res)=>{
      this.recentMediaTasks=res
    })
  }
}
