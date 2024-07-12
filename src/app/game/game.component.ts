import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  squares: ('X' | 'O' | null)[] = [];
  xIsNext = true;
  winner: 'X' | 'O' | null = null;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares = [...this.squares]; // Force change detection by creating a new reference
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): 'X' | 'O' | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  get status() {
    return this.winner ? `Winner: ${this.winner}` : `Next player: ${this.player}`;
  }}
