import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../../accounts/login-popup/login-popup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialogRef: MatDialog){}
  openLoginPopup(){
    this.dialogRef.open(LoginPopupComponent);
  }
}
