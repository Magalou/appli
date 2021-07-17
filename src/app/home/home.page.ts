import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  MovieApiUrl = '';
  movieData = {
    username:'',
  }


  constructor(public http:HttpClient) {
    this.readAPI('https://jsonplaceholder.typicode.com/users')
    .subscribe((data) => {
      console.log(data)
      this.movieData.username= data['username'];
    });
  }
  readAPI(URL:string){
    return this.http.get(URL);
  }

}
