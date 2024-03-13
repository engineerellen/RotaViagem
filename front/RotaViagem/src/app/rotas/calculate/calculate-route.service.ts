import { Injectable } from '@angular/core';
 
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalculateRouteService {
    private apiURL = "https://localhost:7219/api";
     
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) { }

 
  calcularRota(origem: string, destino: string): Observable<string> {

    return this.httpClient.get<string>(this.apiURL + '/rotas/findBestRoute?origem=' + origem + "&destino="+destino );
   
  }  
 
}