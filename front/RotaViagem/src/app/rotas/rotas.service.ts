import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { rotas } from './rotas';
     
@Injectable({
  providedIn: 'root'
})
export class rotasService {
     
  private apiURL = "https://localhost:7219/api";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/rotas/get')
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(rotas:rotas): Observable<any> {

    return this.httpClient.post(this.apiURL + '/rotas/Save/', JSON.stringify(rotas), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/rotas/getById?id=' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update( id:string, rotas:rotas): Observable<any> {
    rotas.id = id;
    return this.httpClient.put(this.apiURL + '/rotas/' , JSON.stringify(rotas), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/rotas/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}