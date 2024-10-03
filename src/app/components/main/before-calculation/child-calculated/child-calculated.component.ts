import { Component } from '@angular/core';

@Component({
  selector: 'app-child-calculated',
  standalone: true,
  imports: [],
  templateUrl: './child-calculated.component.html',
  styleUrl: './child-calculated.component.scss'
})
export class ChildCalculatedComponent {
  calculateAllBillS: number = 0
}
