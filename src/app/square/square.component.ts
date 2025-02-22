import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input()
  value!: 'X' | 'O' | null;
}
