import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { courses } from './courses';
     
@Injectable({
  providedIn: 'root'
})
export class coursesService {
     
  private apiURL = "https://localhost:7219/api";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/Courses/get')
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(courses:courses): Observable<any> {

    return this.httpClient.post(this.apiURL + '/courses/Save/', JSON.stringify(courses), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/courses/getById?id=' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update( id:string, courses:courses): Observable<any> {
    courses.id = id;
    return this.httpClient.put(this.apiURL + '/courses/Update/' , JSON.stringify(courses), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/courses/' + id, this.httpOptions)
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