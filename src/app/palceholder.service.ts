import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PalceholderService {

  constructor( private http:HttpClient) { 

  }

  getpost(): Observable<any>{
     return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
}
