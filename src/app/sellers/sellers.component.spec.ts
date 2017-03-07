import { Observable } from 'rxjs/Rx';
import { SellersService } from '../sellers.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellersComponent } from './sellers.component';

describe('SellersComponent', () => {
  let component: SellersComponent;
  let fixture: ComponentFixture<SellersComponent>;

  const mockService = {
    successGetProducts: true,
    productsList: [{
      id: 69,
      name: 'Ullarsmokkar',
    }],
    getSellerProduct: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.successGetProducts === true) {
            fnSuccess(mockService.productsList);
          } else {
            fnError();
          }
        }
      };
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersComponent ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('give us product'), () => {
    mockService.productsList = 
  };
});
