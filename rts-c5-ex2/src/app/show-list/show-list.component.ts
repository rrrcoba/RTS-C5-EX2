import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { ShowsList } from '../models/shows-list.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  shows: Array<any> = [];

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsService.getPopular()
    .subscribe(
      (response:any) => {
        this.shows = response.results;
      },
      error => {
        console.log(error);
      }
    );
  }

}
