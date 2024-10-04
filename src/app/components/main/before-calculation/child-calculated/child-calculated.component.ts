import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-calculated',
  standalone: true,
  imports: [],
  templateUrl: './child-calculated.component.html',
  styleUrl: './child-calculated.component.scss'
})
export class ChildCalculatedComponent {
  @Input('test') test: number = 0
  @Input('calculateAllTipS') calculateAllTipS: number = 0
}
