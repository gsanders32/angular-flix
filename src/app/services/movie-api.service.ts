import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {


  url = 'https://api.themoviedb.org/3/';
  apiKey = '5d40ed46982a5881d06a3e6260cc4000';
  constructor(private httpClient: HttpClient) { }

  get(path: string, query: string): Promise<any> {
    const params: HttpParams = new HttpParams()
    .set('api_key', this.apiKey)
    .set('query', query);

    return this.httpClient.get<any>(`${this.url}${path}`, {params}).toPromise();
  }
}
