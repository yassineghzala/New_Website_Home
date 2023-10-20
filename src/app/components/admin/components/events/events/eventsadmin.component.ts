import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EventService } from 'src/app/services/event.service';
import { PasswordPopupComponent } from '../../../popups/pop_ups/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../../popups/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../../popups/pop_ups/signout-popup/signout-popup.component';
import { AddPopupComponent } from '../../../popups/shared_popups/add-popup/add-popup.component';

@Component({
  selector: 'app-eventsadmin',
  templateUrl: './eventsadmin.component.html',
  styleUrls: ['./eventsadmin.component.css']
})
export class EventsadminComponent {
  events!:any
  constructor(private dialogRef: MatDialog,private eservice:EventService){}
  ngOnInit(){
    this.eservice.getAllEvents().subscribe((res)=>{
      this.events=res
      console.log("events",res);
      
    })
  }
  
  openPasswordPopup(){
    this.dialogRef.open(PasswordPopupComponent);
  }
  openScorecardPopup(){
    this.dialogRef.open(ScorecardPopupComponent);
  }
  openSignoutPopup(){
    this.dialogRef.open(SignoutPopupComponent);
  }
  openAddPopup(){
    this.dialogRef.open(AddPopupComponent,{
      data:{ComponentName:"events"}
    });
  }
}
