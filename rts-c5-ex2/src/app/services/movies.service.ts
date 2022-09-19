import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

const baseUrl = "https://api.themoviedb.org/3/movie"
const apikey = "?api_key=a986e16897793788f6623281d53e4ee4"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl+`/`+apikey);
  }

  getById(id:any): Observable<Movie> {
    return this.http.get(`${baseUrl}/${id}${apikey}`);
  }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl+`/popular`+apikey+`&language=en-US&page=1`);
  }
}
