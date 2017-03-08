import { Router } from '@angular/router';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { JumboSellersComponent } from './jumbo-sellers/jumbo-sellers.component';
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

  const mockRouter = {
    wow: 1
  }

  const mockService = {
    successGetSellers: true,
    sellersList: [{
      id: 1,
      name: 'Ullarsmokkar',
    }],
    getSellers: function() {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.successGetSellers === true) {
            fnSuccess(mockService.sellersList);
          } else {
            fnError('ERROR');
          }
        }
      };
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersComponent,
        JumboSellersComponent,
        ListSellersComponent
      ],
      imports: [
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: Router,
        useValue: mockRouter
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('give us sellerList when looking for sellers', () => {
    mockService.successGetSellers = true;
    mockService.getSellers().subscribe( result => {
      expect(result).toBe(mockService.sellersList);
    }, err => {
      expect(err).toBeUndefined();
    });
  });

  it('give us error when looking for sellers', () => {
    mockService.successGetSellers = false;
    mockService.getSellers().subscribe( result => {
      expect(result).toBeUndefined();
    }, err => {
      expect(err).toBe('ERROR');
    });
  });

});
