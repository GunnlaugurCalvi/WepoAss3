import { Product } from 'interfaces/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  product: Product;
  public productForm;

  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder) { }

  ngOnInit() {

    if (this.product) {
      this.productForm = this.fb.group({
        id: [this.product.id],
        name: [this.product.name, [Validators.required, Validators.minLength(1)]],
        price: [this.product.price],
        quantityInStock: [this.product.quantityInStock],
        quantitySold: [this.product.quantitySold],
        imagePath: [this.product.imagePath],
      });
    } else {
      this.productForm = this.fb.group({
        id: [],
        name: [, [Validators.required, Validators.minLength(1)]],
        price: [],
        quantityInStock: [],
        quantitySold: [],
        imagePath: [],
      });
    }
  }
  onCancel() {
    this.activeModal.dismiss();
  }
  onOk(event) {
    this.activeModal.close(this.productForm.value);
  }
}
