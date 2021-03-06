import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  base64: string="data:image/png;base64";
  MovieApiUrl = '';
  movieData = {
    username:'',
  }
  
  constructor(public http:HttpClient) {
    this.readAPI('https://www.getpostman.com/collections/befb63e4447819ee3899')
    .subscribe((data) => {
      console.log(data)
      this.movieData.username= data['username'];
        })
      
    };
  }

  readAPI(URL:string);{
    return this.http.get(URL);
  }

}
