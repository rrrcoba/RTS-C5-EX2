import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowsService } from '../services/shows.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  id: any;

  data: Show = {
    backdrop_path: '',
    name: '',
    original_name: '',
    first_air_date: '',
    number_of_episodes: 0,
    number_of_seasons: 0,
    status: '',
    overview: '',
    vote_count: 0
  }

  constructor(private showsService: ShowsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.showsService.getById(this.id)
    .subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
