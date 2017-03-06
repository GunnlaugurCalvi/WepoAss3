import { ActivatedRoute, Router } from '@angular/router';
import { SellersService, Product } from '../../sellers.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {


  private products: Product[];
  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.service.getProducts(this.route.snapshot.params['id']).subscribe( result => {
      this.products = result;
    });
  }

}
