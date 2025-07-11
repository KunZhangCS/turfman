import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  imports: [MatTableModule],
})
export class PricingComponent {

  pricing = [
    {name: 'IronCutter Elite Hybrid Bermuda', price: 14.40},]
} 