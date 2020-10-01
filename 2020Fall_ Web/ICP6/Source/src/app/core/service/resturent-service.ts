import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResturentService {

  clientId = "B5ZI0IP2MZLPE4NF502VF04M5L0AIUYQ4KUQCO2CP1W5ZGN0";
  clientSecret = "GIHYU5XBWUZBMUSOLHT3YI4DKDSMXTU3GHGDG3Z2CKYMKWOY";
  constructor(
    private _httpApiService: HttpApiService
    
    ) { }

    //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.

    
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }        
    getNearestRestaurant(searchstring: any,currentLat : any,currentLong : any):Observable<any>{
      let myparams: any = {  
        ll: currentLat+","+currentLong,
        client_id: 'B5ZI0IP2MZLPE4NF502VF04M5L0AIUYQ4KUQCO2CP1W5ZGN0',
        client_secret:'GIHYU5XBWUZBMUSOLHT3YI4DKDSMXTU3GHGDG3Z2CKYMKWOY',
        v:20200930,
        query:searchstring
      };
      let url = "http://api.foursquare.com/v2/venues/search?ll="+
      currentLat+","+currentLong+"&client_id="+this.clientId+
      '&client_secret='+this.clientSecret+'&v=20200930&query='+searchstring;
      return this._httpApiService.get(url,null);
     }
}


