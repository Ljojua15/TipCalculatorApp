import { Component } from '@angular/core';
import { tipsPercent } from './tips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-before-calculation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-calculation.component.html',
  styleUrl: './before-calculation.component.scss',
})
export class BeforeCalculationComponent {
  public readonly tipsPercent = tipsPercent;

  constructor() {
    console.log(this.tipsPercent);
  }
}
