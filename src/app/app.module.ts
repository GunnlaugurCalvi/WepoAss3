import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { WaresComponent } from './wares/wares.component';
import { SellersComponent } from './sellers/sellers.component';
import { JumboSellersComponent } from './sellers/jumbo-sellers/jumbo-sellers.component';
import { ListSellersComponent } from './sellers/list-sellers/list-sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    WaresComponent,
    JumboSellersComponent,
    ListSellersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
