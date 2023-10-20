import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from '../shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from '../shared_popups/details-popup/details-popup.component';
import { Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';


@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent {
  @Input() event!: any;
  @Input() task!:Assignment;
  constructor(private dialogRef: MatDialog){

  }
  ngOnInit(){
    console.log("ee",this.event);
    
  }
  openDeletePopup(){
    this.dialogRef.open(DeletePopupComponent);
  }
  openModifyPopup(){
    this.dialogRef.open(ModifyPopupComponent);
  }
  openDetailsPopup(){
    this.dialogRef.open(DetailsPopupComponent);
  }
}
