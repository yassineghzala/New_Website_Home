import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/assignment';
import { Departement } from 'src/app/models/departement';
import { Event } from 'src/app/models/event';
import { AssignmentService } from 'src/app/services/assignment.service';
import { DepartService } from 'src/app/services/depart.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-modify-popup',
  templateUrl: './modify-popup.component.html',
  styleUrls: ['./modify-popup.component.css']
})
export class ModifyPopupComponent {
  event!:Event;
  task!:Assignment;
  departs!:Departement[]
  constructor(private tService:AssignmentService,private eService:EventService,private dService:DepartService,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(){
    this.dService.getAllDeparts().subscribe((res)=>{
      this.departs=res
    })
    if (this.data.componentName=='event') {
      this.eService.getEventById(this.data.id).subscribe((res)=>{
        this.event=res;
      })
    } else {
      this.tService.getAssignmentById(this.data.id).subscribe((res)=>{
        this.task=res;
      })
    }
  }
  updateEvent(){
    this.eService.updateEvent(this.event.id,this.event).subscribe((res)=>{
      console.log("event updated",res);
    })
  }
  updateTask(){
    this.tService.updateAssignment(this.task.id,this.task).subscribe((res)=>{
      console.log("task updated",res);
    })
  }
}
