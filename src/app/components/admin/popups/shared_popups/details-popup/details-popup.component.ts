import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/assignment';
import { Event } from 'src/app/models/event';
import { AssignmentService } from 'src/app/services/assignment.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent {
  event!:Event;
  task!:Assignment;
  constructor(public eService:EventService,public tService:AssignmentService,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(){
    console.log("data",this.data);
    
    
    if (this.data.componentName=="event") {
      this.eService.getEventById(this.data.id).subscribe((res)=>{
        this.event=res;
        console.log("eeeeee",this.event);
        
      })
    } else {
      this.tService.getAssignmentById(this.data.id).subscribe((res)=>{
        this.task=res;
        console.log("tttt",this.task);
        
      })
    }
  }
}
