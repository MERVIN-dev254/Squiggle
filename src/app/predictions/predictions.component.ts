import { Component, OnInit } from '@angular/core';
import { PredictionService } from './prediction.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // find a way of the id after game in url
      let api_url = "https://api.squiggle.com.au/?q=tips;game=439"; 
      this.http.get(api_url).subscribe(
        dat => {console.log(dat);
        } 
      )
  }
}
