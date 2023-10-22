import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { PasswordPopupComponent } from '../../../popups/pop_ups/password-popup/password-popup.component';
import { ScorecardPopupComponent } from '../../../popups/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from '../../../popups/pop_ups/signout-popup/signout-popup.component';
import { MemberService } from 'src/app/services/member.service';
import { AddMemberPopupComponent } from '../members/add-member-popup/add-member-popup.component';
import { DepartService } from 'src/app/services/depart.service';
import { Departement } from 'src/app/models/departement';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  departs!:Departement[]
  constructor(private dialogRef: MatDialog,private dService:DepartService){

  }
  ngOnInit(){
    this.dService.getAllDeparts().subscribe((res)=>{
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
  openAddMemberPopup(){
    this.dialogRef.open(AddMemberPopupComponent);
  }
}
