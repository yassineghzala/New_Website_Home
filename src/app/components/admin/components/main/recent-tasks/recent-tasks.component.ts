import { Component } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentService } from 'src/app/services/assignment.service';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-recent-tasks',
  templateUrl: './recent-tasks.component.html',
  styleUrls: ['./recent-tasks.component.css']
})
export class RecentTasksComponent {
  recentDevTasks!:Assignment[]
  recentMediaTasks!:Assignment[]
  constructor(private dservice:DepartService){}
  ngOnInit(){
    this.dservice.getDepartById(1).subscribe((res)=>{
      this.recentDevTasks=res.tasks;
    })
    this.dservice.getDepartById(2).subscribe((res)=>{
      this.recentMediaTasks=res.tasks;
    })
  }
}
