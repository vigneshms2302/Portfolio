
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  currencyPair!: string;
  amount1: number = 0;
  amount2: number = 0;
  rate: number = 0;
  currencyForm!: FormGroup;
  currencies: string[] = ['USD/HKD', 'SGD/MYR', 'INR/EUR'];
  isSpotRateRequired = false;
  showWarningIcon: boolean | null = false;
  warningMessage = 'Spot rate should be between 0 and 50';

  constructor(private formBuilder: FormBuilder) {
    this.currencyForm = this.formBuilder.group({
      currency: ['', Validators.required],
      spotRate: ['', Validators.compose([Validators.min(0), Validators.max(50)])]
    });
  }

  onCurrencyChange(selectedCurrency: string) {
    this.isSpotRateRequired = selectedCurrency === 'USD/HKD';
    this.checkSpotRateValidity();
  }

  checkSpotRateValidity() {
    const spotRateControl = this.currencyForm.get('spotRate');
    this.showWarningIcon = spotRateControl && spotRateControl.invalid;
  }
  







  
  get currency() {
    return this.currencyForm.get('currency');
  }
  fetchRate() {
  
    switch (this.currencyPair) {
      case 'USD/INR':
        this.rate = 82.37; 
        break;
      case 'USD/EUR':
        this.rate = 0.92;
        break;
      case 'USD/DIR':
        this.rate = 3.67;
        break;
      case 'USD/JPY':
        this.rate = 137.59;
        break;
     
      default:
        this.rate = 1;
        break;
    }
  }

  calculateAmount2() {
    this.amount2 = this.amount1 * this.rate;
  }
}