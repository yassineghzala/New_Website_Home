import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { ImageserviceService } from 'src/app/services/imageservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() currentUser!: Member;
  image!:Blob
  constructor(private iservice:ImageserviceService){}
  ngOnInit(){
    console.log("profile",this.currentUser);
    this.iservice.getImageByName("aaaa").subscribe((res)=>{
      this.image=res
    })
  }
}
