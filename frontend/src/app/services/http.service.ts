import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



export interface Hus {
  name: string;
  temperature: number;
  humidity: number;
}



@Injectable({
    providedIn: 'root'
})



export class HttpServiceComponent {

  constructor(private httpClient: HttpClient) {}


   // localhost on port 3000
  private hus1Url = 'http://127.0.0.1:3000/homes/hus1/rooms';
  private hus2Url = 'http://127.0.0.1:3000/homes/hus2/rooms';


   getHus1(): Observable<Hus[]> {
     return this.httpClient.get<Hus[]>(this.hus1Url);
   }

   getHus2(): Observable<Hus[]> {
     return this.httpClient.get<Hus[]>(this.hus2Url);
   }


} // end class
