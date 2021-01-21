import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  
  title = 'redisa-frontend';
  
  constructor( private http: HttpClient) {

  }
  
  ngOnInit() {
    this.http.get<any>('/api_url').subscribe(data => {
        this.title = data.api_url;
    });     
  }

}
