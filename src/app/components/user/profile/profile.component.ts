import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() currentUser!: Member;
  ngOnInit(){
    console.log("profile",this.currentUser);
    
  }
}
