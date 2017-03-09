import { Product } from 'interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SellerDialogComponent } from '../seller-dialog/seller-dialog.component';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  addSeller(){
    const modalInstance = this.modalService.open(SellerDialogComponent);
    modalInstance.componentInstance.sellerName = "";
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!');
      console.log(success);
    }).catch(failure =>{
      console.log('Dialog was closed not very nice!');
      console.log(failure);
    })
  }
}
