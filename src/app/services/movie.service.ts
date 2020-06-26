import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  searchResults = [];
  myMovieList = [];

  constructor(private apiService: ApiService, private movieApiService: MovieApiService) { }

  getSearchResults(): any[] {
    return this.searchResults;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovie(query: string): Promise<void> {
    const response = await this.movieApiService.get('search/multi', query);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }

  async loadMovieList() {
    const response = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...response);
  }

  async saveToList(movie: any) {
    await this.apiService.post(movie);
    await this.loadMovieList();
  }
}
