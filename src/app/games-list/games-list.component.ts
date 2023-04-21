import { Component, OnInit } from '@angular/core';
import { GameDesc } from './gameDesc.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  ticTacToe: GameDesc = {
    name: 'Tic Tac Toe',
    description:
      "Looking for a game that's more fun than watching grass grow, but less complicated than rocket science? Try Tic Tac Toe - it's like a game of X's and O's, but with less kissing and drama!",
    imageURL: '../../assets/tic-tac-toe.jpeg',
    path: '/tic-tac-toe',
  };

  snake: GameDesc = {
    name: 'The Snake',
    description:
      "Are you ready to slither your way to victory? Snake is the game that's so addictive, you'll forget you have a job, family, or responsibilities! Just remember, the only thing you should be swallowing are the little dots - not your own tail!",
    imageURL: '../../assets/snake.jpeg',
    path: '/snake',
  };

  typingSpeed: GameDesc = {
    name: 'Typing Speed',
    description:
      "Are your fingers faster than a speeding bullet? Find out with our keyboard typing game! It's the only game where the hero wears a wrist brace and drinks coffee instead of a cape and superpowers. Get ready to smash those keys and show off your lightning-fast typing skills",
    imageURL: '../../assets/type.jpeg',
    path: '/typing-speed',
  };

  gamesDesc = [this.ticTacToe, this.snake, this.typingSpeed, this.ticTacToe, this.ticTacToe];

  constructor() {}

  ngOnInit(): void {}
}
