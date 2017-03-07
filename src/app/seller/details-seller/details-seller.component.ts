import { Seller } from 'interfaces/seller';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-seller',
  templateUrl: './details-seller.component.html',
  styleUrls: ['./details-seller.component.css']
})

export class DetailsSellerComponent implements OnInit {
  @Input() seller: Seller;

  constructor() {  }

  ngOnInit() {
  }
}
