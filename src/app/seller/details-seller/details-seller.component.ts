import { Seller } from 'interfaces/seller';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-seller',
  templateUrl: './details-seller.component.html',
  styleUrls: ['./details-seller.component.css']
})

export class DetailsSellerComponent implements OnInit {
  @Input() seller: Seller;
  @Output() sellerUpdated = new EventEmitter();
  @Output() productAdded = new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }

  onSellerEdit() {
    this.sellerUpdated.emit(this.seller);
  }
  onProductAdd() {
    this.productAdded.emit(this.seller);
  }
}
