import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent {
  newEvent!:FormGroup;
  constructor(private formBuilder:FormBuilder,private eservice:EventService){}
  ngOnInit(){
    this.newEvent=this.formBuilder.group({
      nameEvent:[""],
      dateEvent:[""],
      place:[""],
      description:[""]
    })

  }
  addEvent(){
    this.addEvent
    this.eservice.addEvent(this.newEvent.value).subscribe((res)=>{
      console.log("added event",res);
    })
  }
}
