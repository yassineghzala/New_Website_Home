import { Component, Input } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  devTasks!:any
  mediaTasks!:any
  constructor(private tservice:AssignmentService){}
  ngOnInit(){
    this.getAssignmentsByDep("dev")
    this.getAssignmentsByDep("media")
  }
  getAssignmentsByDep(dep:string){
    this.tservice.getAssignmentByDep(dep).subscribe(res=>{
      if(dep=="dev"){
        this.devTasks=res;
      }
      else{
        this.mediaTasks=res
      }
    })
  }
}
