import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  appId : string; 
  appKey : string;
  constructor(
    private _httpApiService: HttpApiService
    
    ) { 
      this.appId = "e9ecabcd";
      this.appKey = "20a30bd8fea9ad66da0fa7ae3107c51c";
    }


    
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }
         
      getRecipie(recipievalue: string):Observable<any>{
        let url = "https://api.edamam.com/search?q="+
        recipievalue+"&app_id="+this.appId+"&app_key="+this.appKey;
      return this._httpApiService.get(url,null);
  }
}


