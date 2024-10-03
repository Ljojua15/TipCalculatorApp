import { Component } from '@angular/core';
import { tipsPercent } from './tips';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { AnySoaRecord } from 'dns';

@Component({
  selector: 'app-before-calculation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-calculation.component.html',
  styleUrl: './before-calculation.component.scss',
})
export class BeforeCalculationComponent {
  public readonly tipsPercent = tipsPercent;
  public bill: number = 100;
  public people: number = 5;
  public percent: any = 0.5;
  public totalAmountPerPerson: number = 0;
  public tipAmountPerPerson: number = 0;

  constructor() {
    this.totoalAmount();
    this.tipAmount();
  }

  takeValue(index: number): number {
    this.percent = this.tipsPercent[index].value;
    console.log(this.percent);
    return this.percent;
  }

  totoalAmount(): number {
    this.totalAmountPerPerson =
      (this.bill + this.bill * this.percent) / this.people;
    console.log(this.totalAmountPerPerson);
    return this.totalAmountPerPerson;
  }

  tipAmount(): number {
    this.tipAmountPerPerson = (this.bill * this.percent) / this.people;
    console.log(this.tipAmountPerPerson);
    return this.tipAmountPerPerson;
  }
}
