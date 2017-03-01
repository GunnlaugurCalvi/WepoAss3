import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { WaresComponent } from './wares/wares.component';
import { SellersComponent } from './sellers/sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    WaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
