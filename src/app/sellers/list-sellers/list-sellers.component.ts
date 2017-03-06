import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../../sellers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {

  private sellers: Seller[];
  constructor(private service: SellersService, private router: Router) {  }

  ngOnInit() {
    this.service.getSellers().subscribe( result => {
      this.sellers = result;
    });
  }
  routeToSeller(id: number) {
    console.log('Routed To Seller: ' + id);
    this.router.navigate(['/sellers', id]);
  }
}
