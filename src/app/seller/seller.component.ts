import { SellerDialogComponent } from '../dialogs/seller-dialog/seller-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'interfaces/product';
import { Seller } from 'interfaces/seller';
import { ActivatedRoute } from '@angular/router';
import { SellersService } from 'app/sellers.service';
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProductDialogComponent} from 'app/dialogs/product-dialog/product-dialog.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  public seller: Seller;
  public products: Product[];
  constructor(private service: SellersService, private route: ActivatedRoute, private modalService: NgbModal,
              private toastr: ToastsManager, vcr: ViewContainerRef) {

              this.toastr.setRootViewContainerRef(vcr);
  }

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
  onProductAdded() {
    const modalInstance = this.modalService.open(ProductDialogComponent);
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!1');
      console.log(success);
      this.service.addProduct(this.seller.id, success).subscribe( succ => {
        console.log(succ);
        this.products.push(succ['product']);
        this.toastr.success('New product has been added', 'Success!', {dismiss: 'auto'});
      }, error => {
        this.toastr.error('Oops something went wrong!', 'Error!', {dismiss: 'auto'});
        console.log(error);
      });
    }).catch(failure => {
      console.log('Dialog was closed not very nice!1');
    });
  }
  onUpdateProduct(product) {
    if (!product) { return; }
    const modalInstance = this.modalService.open(ProductDialogComponent);
    modalInstance.componentInstance.product = product;
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!2');
      console.log(success);
      this.service.updateProduct(this.seller.id, success).subscribe( succ => {
        console.log(succ);
        this.products[this.products.indexOf(product)] = succ['product'];
        this.toastr.success(this.products + ' has been updated!', 'Success!', {dismiss: 'auto'});
      }, error => {
        this.toastr.error('Woops something went wrong!', 'Error!', {dismiss: 'auto'});
        console.log(error);
      });
    }).catch(failure => {
      console.log('Dialog was closed not very nice!2');
    });
  }
  onUpdateSeller(seller) {
    if (!seller) { return; }
    const modalInstance = this.modalService.open(SellerDialogComponent);
    modalInstance.componentInstance.seller = seller;
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!3');
      console.log(success);
      this.service.updateSeller(success).subscribe( succ  => {
        console.log('SUCCESS');
        console.log(succ);
        this.seller = succ;
        this.toastr.success(' has been updated!', 'Success!', {dismiss: 'auto'});
      }, error => {
        this.toastr.error('Woopsie Doopsie something went wrong!', 'Error!', {dismiss: 'auto'});
        console.log(error);
      });
    }).catch(failure => {
      console.log('Dialog was closed not very nice!3');
    });
  }
}
