import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    return this.http.get('http://localhost:5000/api/games').subscribe(res => {
      this.games = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
