import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddPopupComponent } from '../../shared_components/shared_popups/add-popup/add-popup.component';
import { PasswordPopupComponent } from '../../../main_dashboard_components/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../../main_dashboard_components/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../../main_dashboard_components/pop_ups/signout-popup/signout-popup.component';
import { EventService } from 'src/app/services/event.service';

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
