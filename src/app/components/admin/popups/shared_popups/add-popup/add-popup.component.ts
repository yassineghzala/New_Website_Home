import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Departement } from 'src/app/models/departement';
import { AssignmentService } from 'src/app/services/assignment.service';
import { DepartService } from 'src/app/services/depart.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent {
  newEvent!: FormGroup;
  newTask!: FormGroup;
  departs!:Departement[];
  constructor(private formBuilder: FormBuilder, private eservice: EventService, private tservice: AssignmentService, private dService: DepartService,private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    console.log("aaa", this.data);
    this.dService.getAllDeparts().subscribe((res)=>{
      this.departs=res
    })
    if (this.data.ComponentName == "events") {
      this.newEvent = this.formBuilder.group({
        nameEvent: [""],
        dateEvent: [""],
        place: [""],
        description: [""]
      })
      console.log("event", this.newEvent.value);
    }
    else {
      this.newTask = this.formBuilder.group({
        title: [""],
        deadline: [""],
        idDeparts: [""],
        description: [""]
      })
      console.log("task", this.newTask.value);
    }


  }
  addEvent(idDepart: string) {
    this.eservice.addEvent(parseInt(idDepart), this.newEvent.value).subscribe((res) => {
      console.log("added event", res);
      this.dialogRef.closeAll()
    })
  }

  addTask(idDepart: string) {
    this.tservice.addAssignment(parseInt(idDepart),this.newTask.value).subscribe((res) => {
      console.log("added task", res);
      this.dialogRef.closeAll()
    })
  }
}
