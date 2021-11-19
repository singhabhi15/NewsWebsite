import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
  static busniessnews() {
    throw new Error('Method not implemented.');
  }
  

  constructor(private _http:HttpClient) { }

    //api key = 33a861f50d734fd88d6291394a45a84c

   //Url 
   newsApiUrl= "https://newsapi.org/v2/top-headlines?country=in&apiKey=33a861f50d734fd88d6291394a45a84c";
   technewsapiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=33a861f50d734fd88d6291394a45a84c";
   businessNewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=33a861f50d734fd88d6291394a45a84c";

   //topheading
   topHeading():Observable<any>
   {
    return this._http.get(this.newsApiUrl)
   }

  //technews
   technews():Observable<any>
   {
     return this._http.get(this.technewsapiUrl)
   }

   //businessnews
   busniessNews():Observable<any>
   {
     return this._http.get(this.businessNewsapiUrl)
   }
  
}
