import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SquiggleGames';
  data = Object;
  teams = [];


  constructor(private http:HttpClient){}

  ngOnInit(){
    let api_url = "https://api.squiggle.com.au/?q=teams"; 
    this.http.get(api_url).subscribe(
      (e) => {
        for (let i = 0; i < Object.entries(e).length; i++) {
          console.log(Object.entries(e)[1][i]);
        }
      }
    );}
    
}

