import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  @Input() character!: Character
}
