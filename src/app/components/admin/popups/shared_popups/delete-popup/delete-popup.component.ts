import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/assignment';
import { Event } from 'src/app/models/event';
import { AssignmentService } from 'src/app/services/assignment.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  event!:Event;
  task!:Assignment;
  constructor(public eService:EventService,public tService:AssignmentService,private dialogRef: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any){}
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
  deleteTask(){
    this.tService.deleteAssignmentById(this.task.id).subscribe(()=>{
      console.log("deleted");
      this.dialogRef.closeAll()
    });
  }
  deleteEvent(){
    this.eService.deleteEventById(this.event.id).subscribe(()=>{
      console.log("deleted");
      this.dialogRef.closeAll()
    });
  }
  closePopups(){
    
  }
}
