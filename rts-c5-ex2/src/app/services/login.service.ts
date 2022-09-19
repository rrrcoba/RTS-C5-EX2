import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const apiKey = "a986e16897793788f6623281d53e4ee4"

const baseUrlPage = "https://api.themoviedb.org/3/";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getToken(): Observable<any>{
    return this.http.get(baseUrlPage+"authentication/token/new?api_key="+apiKey);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrlPage}authentication/token/validate_with_login?api_key=${apiKey}`, data);
  }
}
