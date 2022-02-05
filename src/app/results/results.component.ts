import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let api_url = "https://api.squiggle.com.au/?q=tips;game=439"; 
    this.http.get(api_url).subscribe(
      dat => {console.log(dat);
      } 
    )
  }

}
