import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MoviesList } from '../models/movies-list.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Array<any> = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopular()
    .subscribe(
      (response:any) => {
        this.movies = response.results;
      },
      error => {
        console.log(error);
      }
    );
  }

}
