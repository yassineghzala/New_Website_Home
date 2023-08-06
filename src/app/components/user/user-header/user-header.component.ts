import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  @Input() currentUser!: Member;
  ngOnInit(){
    console.log(this.currentUser);
  }
  
}
