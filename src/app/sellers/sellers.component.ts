import { Seller } from 'interfaces/seller';
import { SellersService } from 'app/sellers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})

export class SellersComponent implements OnInit {
  public sellers: Seller[];

  constructor( private service: SellersService ) { }

  ngOnInit() {
    this.service.getSellers().subscribe( result => {
      this.sellers = result;
    }, err => {
    });
  }

}
