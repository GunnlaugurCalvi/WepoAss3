import { Product } from 'interfaces/product';
import { Seller } from 'interfaces/seller';
import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from 'app/sellers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  private seller: Seller;
  private products: Product[];
  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.service.getProducts(this.route.snapshot.params['id']).subscribe( result => {
      this.products = result;
    });
    this.service.getSellerById(this.route.snapshot.params['id']).subscribe( result => {
      this.seller = result;
    });
  }

}
