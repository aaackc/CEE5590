import { Component, OnInit } from '@angular/core';
import { ResturentService } from '@core/service/resturent-service';

import { RestaurentList } from '@core/models/Restarents/Restaurents-list';
@Component({
  selector: 'app-resturents-list',
  templateUrl: './resturents-list.component.html',
  styleUrls: ['./resturents-list.component.css']
})
export class ResturentsListComponent implements OnInit {
  currentLat: any;
  currentLong: any;
  query : string;
  Restaurentlistdata : RestaurentList;
  geolocationPosition: any;
  constructor(private resturentService : ResturentService) { }

  ngOnInit() {
    this.query = "Restaurant";
    this.Restaurentlistdata = new RestaurentList();
    //get current location via google chrome.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });  
  }
  getNearestResturent(){
    // get list of nearest resturents via service.
    this.resturentService.getNearestRestaurant(this.query,this.currentLat,this.currentLong).subscribe(result => {
        this.Restaurentlistdata = result.response;
    });
  }

}
