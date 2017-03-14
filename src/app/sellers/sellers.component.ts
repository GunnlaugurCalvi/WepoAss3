import { Seller } from 'interfaces/seller';
import { SellersService } from 'app/sellers.service';
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { SellerDialogComponent } from '../dialogs/seller-dialog/seller-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ToastsManager, ToastOptions} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css'],
  providers: [ToastsManager, ToastOptions]
})

export class SellersComponent implements OnInit {
  public sellers: Seller[];

  constructor( private service: SellersService, private modalService: NgbModal,
               private toastr: ToastsManager, vcr: ViewContainerRef) {

              this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.service.getSellers().subscribe( result => {
      this.sellers = result;
    }, err => {
    });
  }

  onSellerAdded() {
    const modalInstance = this.modalService.open(SellerDialogComponent);
    modalInstance.result.then(success => {
      console.log('Dialog was closed very nice!');
      console.log(success);
      this.service.addSeller(success).subscribe( succ => {
        console.log(succ);
        this.sellers.push(succ);
        this.toastr.success('New User has been added', 'Success!', {dismiss: 'auto'});
      }, error => {
        this.toastr.error('Something went wrong!', 'Error!', {dismiss: 'auto'});
        console.log(error);
      });
    }).catch(failure => {
      console.log('Dialog was closed not very nice!');
    });
  }

}
