import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-seller',
  templateUrl: './details-seller.component.html',
  styleUrls: ['./details-seller.component.css']
})
export class DetailsSellerComponent implements OnInit {

  private seller: Seller;

  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.service.getSellerById(this.route.snapshot.params['id']).subscribe( result => {
      this.seller = result;
    });
  }
}
