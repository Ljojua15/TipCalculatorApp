import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-calculated',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child-calculated.component.html',
  styleUrl: './child-calculated.component.scss'
})
export class ChildCalculatedComponent {
  @Input('test') test!: number 
  @Input('calculateAllTipS') calculateAllTipS!: number 

  disable:boolean =false

  resetBtn(){
    this.test = 0;
    this.calculateAllTipS = 0;
    console.log('none');

    console.log(this.test);
    
    
    
  }
}
