import { ActivatedRoute } from '@angular/router';
import { CardProductComponent } from './list-products/card-product/card-product.component';
import { DetailsSellerComponent } from './details-seller/details-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {SellerComponent} from './seller.component';
import {SellersService} from 'app/sellers.service';
import {Observable} from 'rxjs/Observable';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;

  const MockActivatedRoute = {
    snapshot: {
      params: {id: 1}
    }
  }

  const mockService = {
    successGetSeller: false,
    successGetProducts: false,
    seller: {
      id: 1,
      name: 'Smokkasalan',
    },
    products: [{
      id: 1,
      name: 'Ullarsmokkar',
    }],
    getSellerById: function(num: number) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.successGetSeller === true) {
            fnSuccess(mockService.seller);
          } else {
            fnError('ERROR');
          }
        }
      };
    },
    getProducts: function(num: number) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.successGetProducts === true) {
            fnSuccess(mockService.products);
          } else {
            fnError('ERROR');
          }
        }
      };
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerComponent,
        ListProductsComponent,
        DetailsSellerComponent,
        CardProductComponent
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: ActivatedRoute,
        useValue: MockActivatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give us products and seller', () => {
    mockService.successGetProducts = true;
    mockService.successGetSeller = true;
    mockService.getSellerById(1).subscribe( result => {
      expect(result).toBe(mockService.seller);
    }, err => {
      expect(err).toBeUndefined();
    });
    mockService.getProducts(1).subscribe( result => {
      expect(result).toBe(mockService.products);
    }, err => {
      expect(err).toBeUndefined();
    });
  });

  it('give us error when looking for sellers', () => {
    mockService.successGetProducts = false;
    mockService.successGetSeller = false;
    mockService.getSellerById(1).subscribe( result => {
      expect(result).toBeUndefined();
    }, err => {
      expect(err).toBe('ERROR');
    });
    mockService.getProducts(1).subscribe( result => {
      expect(result).toBeUndefined();
    }, err => {
      expect(err).toBe('ERROR');
    });
  });
});
