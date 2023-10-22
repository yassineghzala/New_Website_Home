import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member!: Member;
  @Input() depart!: string;
  ngOnInit(){
    console.log("member",this.member);
    
  }
}
