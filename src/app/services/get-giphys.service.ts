import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGiphysService {

  constructor(private http: HttpClient) { }

  private api_key = 'qzYhHNR3AzSNlyDJfYszWtwnoAgHbXn9';
  // private limit;
  private url = 'https://api.giphy.com/v1/gifs/search';

  getGiphys(qq){
    let url =`${this.url}?api_key=${this.api_key}&q=${qq}&limit=24`;
    console.log(url);
    return this.http.get(url);
  }
}
