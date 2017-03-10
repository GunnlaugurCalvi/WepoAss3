import { FormBuilder, Validators } from '@angular/forms';
import { Seller } from 'interfaces/seller';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-dialog',
  templateUrl: './seller-dialog.component.html',
  styleUrls: ['./seller-dialog.component.css']
})
export class SellerDialogComponent implements OnInit {
  seller: Seller;
  public sellerForm;

  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder ) { }

  ngOnInit() {
    this.sellerForm = this.fb.group({
      id: [this.seller.id],
      name: [this.seller.name, [Validators.required, Validators.minLength(1)]],
      category: [this.seller.category],
      imagePath: [this.seller.imagePath],
    });
  }
  onCancel() {
    this.activeModal.dismiss();
  }
  onOk() {
    this.activeModal.close(this.sellerForm.value);
  }
}
