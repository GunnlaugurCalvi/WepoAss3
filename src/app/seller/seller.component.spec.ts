import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NgbAlertConfig,
    NgbAlertModule,
    NgbModal,
    NgbTab,
    NgbTabsetConfig,
    NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CardProductComponent } from './list-products/card-product/card-product.component';
import { DetailsSellerComponent } from './details-seller/details-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import {SellerComponent} from './seller.component';
import {SellersService} from 'app/sellers.service';
import {Observable} from 'rxjs/Observable';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;


  const mockModal = {
    pressedOk: true,
    seller: {
      id: 420,
      name: 'Dýrabúð Dabs',
      category: 'Háskólanemasala',
      imagePath: 'https://www.dyraklam.is'
    },
    open: function() {
      return {
        result: {
          then: function(fnSuccess) {
            if (mockModal.pressedOk) {
              fnSuccess(mockModal.seller);
            } return {
              catch: function(fnError) {
                if (!mockModal.pressedOk) {
                  fnError();
                }
              }
            };
          }
        }
      };
    }
  };


  const MockActivatedRoute = {
    snapshot: {
      params: {id: 1}
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockService = {
    successGetSeller: false,
    successGetProducts: false,
    successUpdateProducts: false,
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
    },
    updateProduct: function(products) {
      return 'UPDATED';
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
        provide: RouterLink,
        useValue: RouterLink
      }, {
        provide: Router,
        useValue: mockRouter
      }, {
        provide: SellersService,
        useValue: mockService
      }, {
        provide: ActivatedRoute,
        useValue: MockActivatedRoute
      }, {
        provide: NgbModal,
        useValue: mockModal
      }, {
        provide: NgbTab,
        useValue: NgbTab
      }, {
        provide: NgbTabsetConfig,
        useValue: NgbTabsetConfig
      }, {
        provide: ToastsManager,
        useValue: ToastsManager
      }, {
        provide: NgbAlert,
        useValue: NgbAlert
      }, {
        provide: NgbAlertConfig,
        useValue: NgbAlertConfig
      }],
      imports: [
        ReactiveFormsModule,
        NgbTabsetModule,
        RouterModule,
        NgbAlertModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  it('should give us error when looking for sellers', () => {
    mockService.successGetSeller = false;
    mockService.getSellerById(1).subscribe( result => {
      expect(result).toBeUndefined();
    }, err => {
      expect(err).toBe('ERROR');
    });
  });

  it('should give us error when looking for products', () => {
    mockService.successGetProducts = false;
    mockService.getProducts(1).subscribe( result => {
      expect(result).toBeUndefined();
    }, err => {
      expect(err).toBe('ERROR');
    });
  });

  it('should mock successful updateProduct', () => {

    mockModal.pressedOk = true;

  });
});
