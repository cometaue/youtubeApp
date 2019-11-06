import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyBtpisql9Z93EuWkM1DjHcjRFZMPjMaI3A';
  private uploads = 'UCuaPTYj15JSkETGnEseaFFg';
  private url = 'https://www.googleapis.com/youtube/v3/';
  private nextPage = 'CAoQAA';
  public items: any[] = [];
  constructor(private http: HttpClient) {

   }
   getVideos() {
     let pms = new HttpParams().set('part', 'snippet').set('channelId', 'UCuaPTYj15JSkETGnEseaFFg')
     .set('key', `${this.apiKey}`).set('maxResults', '10');
     return this.http.get('https://www.googleapis.com/youtube/v3/playlists', {params: pms})
     .pipe(map((res: any) => {
       console.log(res);
       for (const iterator of res.items) {
          this.items.push(iterator.snippet);
        }
       return this.items;
     }));
   }
}
