import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
public videos: any[] = [];
public videoSel: any;
  constructor(private service: YoutubeService) {
  }

  ngOnInit() {
    this.service.getVideos().subscribe(resp => {
       this.videos = resp;
       console.log(this.videos);
      });
  }
  verVideo(video: any) {
  this.videoSel = video;
  $('#myModal').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus');
  });
}
}
