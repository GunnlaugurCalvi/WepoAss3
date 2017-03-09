import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor( ) {  }

  ngOnInit() {

  }

  onUpdateProduct(product) {
    this.productUpdated.emit(product);
  }
}
