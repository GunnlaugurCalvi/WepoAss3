import { Seller } from 'interfaces/seller';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {

  @Input() sellers: Seller[];
  @Output() sellerAdded = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSellerAdd() {
    this.sellerAdded.emit();
  }
}
