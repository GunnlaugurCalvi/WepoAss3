import { Product } from 'interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})

export class CardProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onProductEdit() {
    this.productUpdated.emit(this.product);
  }

}
