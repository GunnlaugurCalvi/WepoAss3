import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'interfaces/product';
import { Seller } from 'interfaces/seller';
import { ActivatedRoute } from '@angular/router';
import { SellersService } from 'app/sellers.service';
import {Component, OnInit} from '@angular/core';
import {ProductDialogComponent} from 'app/dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  public seller: Seller;
  public products: Product[];
  constructor(private service: SellersService, private route: ActivatedRoute, private modalService: NgbModal) {  }

  ngOnInit() {
    this.service.getProducts(this.route.snapshot.params['id']).subscribe(result => {
      this.products = result;
    }, error => {
      // TODO
    });
    this.service.getSellerById(this.route.snapshot.params['id']).subscribe(result => {
      this.seller = result;
    }, error => {
      // TODO
    });

  }
  onUpdateProduct(product) {
    const modalInstance = this.modalService.open(ProductDialogComponent);
    modalInstance.componentInstance.product = product;
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!');
    }).catch(failure => {
      console.log('Dialog was closed not very nice!');
    });
  }
}
