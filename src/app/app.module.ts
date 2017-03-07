import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellersComponent } from './sellers/sellers.component';
import { JumboSellersComponent } from './sellers/jumbo-sellers/jumbo-sellers.component';
import { ListSellersComponent } from './sellers/list-sellers/list-sellers.component';
import { SellerComponent } from './seller/seller.component';
import { ListProductsComponent } from './seller/list-products/list-products.component';
import { DetailsSellerComponent } from './seller/details-seller/details-seller.component';
import { CardProductComponent } from './seller/list-products/card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    JumboSellersComponent,
    ListSellersComponent,
    SellerComponent,
    ListProductsComponent,
    DetailsSellerComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    }, {
      path: 'sellers',
      component: SellersComponent
    }, {
      path: 'sellers/:id',
      component: SellerComponent
    }, {
      path: '**',
      redirectTo: '/sellers'
    }]),
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
