import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  @Input() members:any
  constructor(private uservice:UsersService){}
  
  ngOnInit(){
    
  }
  
  
  }

