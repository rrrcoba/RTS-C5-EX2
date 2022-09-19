import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { ShowListComponent } from './show-list/show-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movie-info/:id',
    component: MovieInfoComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'show-info/:id',
    component: ShowInfoComponent
  },
  {
    path: 'shows',
    component: ShowListComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
