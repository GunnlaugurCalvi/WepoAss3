import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  private sellers: Seller[];
  constructor(private service: SellersService) {  }

  ngOnInit() {
    this.service.getSellers().subscribe( result => {
      this.sellers = result;
    });
  }

}
