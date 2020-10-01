import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(
    private _httpApiService: HttpApiService,
    private _http: HttpClient
    
    ) { }

    //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.

    
    Method():Observable<any>{
      return this._httpApiService.get("","");
    }
         
      getWikiList(serchTerm:string):Observable<any>{
      return  this._http.jsonp("http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=archive&gsrsearch="+serchTerm, 'callback')
  }
}


