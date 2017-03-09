import { Product } from '../../../interfaces/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  product: Product;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  onCancel() {
    this.activeModal.dismiss();
  }
  onOk() {
    console.log(this.product);
    this.activeModal.close(this.product);
  }
}
