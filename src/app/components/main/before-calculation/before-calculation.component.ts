import { Component, Input, OnChanges } from '@angular/core';
import { tipsPercent } from './tips';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { AnySoaRecord } from 'dns';
import { FormsModule } from '@angular/forms';
import { ChildCalculatedComponent } from "./child-calculated/child-calculated.component";

@Component({
  selector: 'app-before-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildCalculatedComponent],
  templateUrl: './before-calculation.component.html',
  styleUrl: './before-calculation.component.scss',
})
export class BeforeCalculationComponent implements OnChanges {
  public totalAmount: number = 0;
  public tipAmount: number = 0;
  public readonly tipsPercent = tipsPercent;
  public bill: number = 0;
  public people: number = 1;
  public percent: any = 1;
  public customPercent: any = 0;
  sum: number = 0;

  takenInfo = new Map([
    ['bill', this.bill],
    ['percent', this.percent],
    ['customPercent', this.customPercent],
    ['percent', this.percent],
  ]);

  constructor() {
    console.log(this.takenInfo.get('bill'));
  }


  ngOnChanges() {
   this.sum = this.calculateBillS()
   console.log(this.sum,'relly?');
  this.calculateBillS()
   
  }
  billTake(event: any): any {
    this.bill = parseFloat(event.target.value);
    // console.log(this.bill, 'bill')
    return this.bill;
  }

  percentTake(index: number): number {
    this.percent = this.tipsPercent[index].value;
    console.log(this.percent, 'NotCustom');
    return this.percent;
  }

  customPercentTake(event: any): any {
    this.customPercent = parseFloat(event.target.value);
    console.log(this.customPercent, 'customPercent');
    return this.bill;
  }

  peopleTake(event: any): any {
    this.people = parseFloat(event.target.value);
    console.log(this.people, 'people');
    return this.bill;
  }

  calculateBillS(){
    console.log(this.customPercent ?( this.bill +(this.bill * this.customPercent / 100)) / this.people : 
    ( this.bill +(this.bill * this.percent / 100)) / this.people, 'es ra chemi');
    
    return this.customPercent ?( this.bill +(this.bill * this.customPercent / 100)) / this.people : 
    ( this.bill +(this.bill * this.percent / 100)) / this.people
  }

  calcuTipS(){
    return this.customPercent ? (this.bill * this.customPercent / 100) / this.people :
    (this.bill * this.percent / 100) / this.people
  }
}
