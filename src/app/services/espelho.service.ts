import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { espelho, Datum } from '../espelho/espelho';

@Injectable({
  providedIn: 'root'
})
export class EspelhoService {

  constructor(private http: HttpClient) { }

  url: string = "https://controlauvoapi20200817121732.azurewebsites.net/api/Registros/obtenhaTodos";

  getEspelhos(): Observable<espelho[]> {
    return this.http.get<espelho[]>(this.url)
      .pipe(
        map(this.extractData)
      );
  }

  getEspelho(id: number) {
    // let espelhos = this.getEspelhos();
    // for (let index = 0; index < espelhos.; index++) {
    //   let element = espelhos[index];
    //   if (element.id == id) { return element; }
    // }
    return null;
  }

  extractData(response: any) {
    return response.data || {};
  }

}
