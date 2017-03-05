import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../../sellers.service';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {

  private sellers: Seller[];
  constructor(private service: SellersService) {  }

  ngOnInit() {
    this.service.getSellers().subscribe( result => {
      this.sellers = result;
    });
  }

}
