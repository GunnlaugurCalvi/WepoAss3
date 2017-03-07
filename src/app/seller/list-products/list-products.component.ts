import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from '../../sellers.service';
import {Component, Input, OnInit} from '@angular/core';
import {Product} from 'interfaces/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor(private service: SellersService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.service.getProducts(this.route.snapshot.params['id']).subscribe( result => {
      this.products = result;
    });
  }

}
