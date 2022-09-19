import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../models/show.model';

const baseUrl = "https://api.themoviedb.org/3/tv"
const apikey = "?api_key=a986e16897793788f6623281d53e4ee4"

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Show[]> {
    return this.http.get<Show[]>(baseUrl+`/`+apikey);
  }

  getById(id:any): Observable<Show> {
    return this.http.get(`${baseUrl}/${id}${apikey}`);
  }

  getPopular(): Observable<Show[]> {
    return this.http.get<Show[]>(baseUrl+`/popular`+apikey+`&language=en-US&page=1`);
  }
}
