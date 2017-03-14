import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'interfaces/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() products: Product[];
  @Output() productUpdated = new EventEmitter();

  topten: Product[];

  constructor( ) {  }

  ngOnInit() {
    if (this.products) {
      this.topten = this.products;
      this.topten.sort((a, b) => a.quantitySold > b.quantitySold ? -1 : a.quantitySold < b.quantitySold ? 1 : 0);
      this.topten = this.topten.splice(0, 10);
    }
  }

  onUpdateProduct(product) {
    this.productUpdated.emit(product);
    this.ngOnInit();
  }
}
