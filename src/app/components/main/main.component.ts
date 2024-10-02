import { Component } from '@angular/core';
import { BeforeCalculationComponent } from './before-calculation/before-calculation.component';
import { CalculatedComponent } from './calculated/calculated.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BeforeCalculationComponent, CalculatedComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
