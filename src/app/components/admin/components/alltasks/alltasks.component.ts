import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { AssignmentService } from 'src/app/services/assignment.service';
import { PasswordPopupComponent } from '../../popups/pop_ups/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../popups/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../popups/pop_ups/signout-popup/signout-popup.component';
import { AddPopupComponent } from '../../popups/shared_popups/add-popup/add-popup.component';
import { DepartService } from 'src/app/services/depart.service';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent {

  departs!:any
  constructor(private dialogRef: MatDialog,private dservice:DepartService){

  }
  ngOnInit(){
    this.dservice.getAllDeparts().subscribe((res)=>{
      this.departs=res;
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
      data:{ComponentName:"tasks"}
    });
  }
}
