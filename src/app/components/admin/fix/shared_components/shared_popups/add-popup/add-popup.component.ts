import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  newTask!:FormGroup;
  departs: Departement[] = []
  constructor(private formBuilder: FormBuilder, private eservice: EventService,private tservice:AssignmentService, private dService: DepartService,@Inject(MAT_DIALOG_DATA) public data:any) { }
  ngOnInit() {
    console.log("aaa",this.data);
    
    if(this.data.ComponentName=="events"){
      this.newEvent = this.formBuilder.group({
        nameEvent: [""],
        dateEvent: [""],
        idDeparts: [""],
        place: [""],
        description: [""]
      })
      console.log("event", this.newEvent.value);
    }
    else{
      this.newTask = this.formBuilder.group({
        title: [""],
        deadline: [""],
        idDeparts: [""],
        description: [""]
      })
      console.log("task", this.newTask.value);
    }
    

  }
  addEvent() {
    if (this.newEvent.value.idDeparts != "3") {
      this.dService.getDepartById(this.newEvent.value.idDeparts).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", res);
        this.newEvent.value.idDeparts = this.departs;
        console.log("sdsd", this.newEvent.value);
        this.eservice.addEvent(this.newEvent.value).subscribe((res) => {
          console.log("added event", res);
        })
      })
    }
    else {
      this.dService.getDepartById(1).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", this.departs);
      })
      this.dService.getDepartById(2).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", this.departs);
        this.newEvent.value.idDeparts = this.departs;
        console.log("sdsd", this.newEvent.value);
        this.eservice.addEvent(this.newEvent.value).subscribe((res) => {
          console.log("added event", res);
        })
      })
    }
    this.departs = []
  }
  addTask(){
    if (this.newTask.value.idDeparts != "3") {
      this.dService.getDepartById(this.newTask.value.idDeparts).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", res);
        this.newTask.value.idDeparts = this.departs;
        console.log("sdsd", this.newTask.value);
        this.tservice.addAssignment(this.newTask.value).subscribe((res) => {
          console.log("added task", res);
        })
      })
    }
    else {
      this.dService.getDepartById(1).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", this.departs);
      })
      this.dService.getDepartById(2).subscribe((res) => {
        this.departs.push(res);
        console.log("depart", this.departs);
        this.newTask.value.idDeparts = this.departs;
        console.log("sdsd", this.newTask.value);
        this.tservice.addAssignment(this.newTask.value).subscribe((res) => {
          console.log("added task", res);
        })
      })
    }
    this.departs = []
  }
  
}
