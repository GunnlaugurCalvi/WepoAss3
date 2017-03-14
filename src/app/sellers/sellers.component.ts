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
      this.toastr.error('Can\'t connect to server', 'Error!', {dismiss: 'auto'});
    });
  }

  onSellerAdded() {
    const modalInstance = this.modalService.open(SellerDialogComponent);
    modalInstance.result.then(success => {
      this.service.addSeller(success).subscribe( succ => {
        this.sellers.push(succ);
        this.toastr.success('New User has been added', 'Success!', {dismiss: 'auto'});
      }, error => {
        this.toastr.error(error, 'Error!', {dismiss: 'auto'});
      });
    }).catch(failure => {
      this.toastr.error(failure, 'Error!', {dismiss: 'auto'});
    });
  }

}
