import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://ce-authenticated-backend.herokuapp.com/publicapi/movies';

  get(): Promise<any> {
    return this.httpClient.get<any>(this.url).toPromise();
  }

  post(data: any): Promise<any> {
    return this.httpClient.post<any>(this.url, data).toPromise();
  }

}
