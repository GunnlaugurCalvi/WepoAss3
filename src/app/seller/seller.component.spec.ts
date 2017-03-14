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
import {Product} from "../../interfaces/product";

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

  const mockToastr = {
    info: jasmine.createSpy('info'),
    error: jasmine.createSpy('error'),
    success: jasmine.createSpy('success')
  };

  const mockService = {
    successGetSeller: false,
    successGetProducts: false,
    successUpdateProducts: false,
    seller: {
      id: 1,
      name: 'hax0r',
      category: 'asd',
      imagePath: 'https://www.hx0r.com/pic'
    },
    updateSeller: {
      id: 1337,
      name: 'hax0r12',
      category: 'asdf',
      imagePath: 'http://www.hx0r.com/pic'
    },
    products: {
      id: 2,
      name: 'coolbeans',
      price: 8008,
      quantitySold: 32,
      quantityInStock: 42,
      imagePath: 'https://avatars2.githubusercontent.com/u/18679468?v=3&s=60'
    },
    updatedProduct: {
      id: 1337,
      name: 'kewlbeans',
      price: 1995,
      quantitySold: 10,
      quantityInStock: 1338,
      imagePath: 'https://avatars2.githubusercontent.com/u/16033836?v=3&s=60'
    },
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
    onUpdateProduct: function(product: Product) {
      return {

      }
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
    mockService.products = {
      id: 2,
      name: 'coolbeans',
      price: 8008,
      quantitySold: 32,
      quantityInStock: 42,
      imagePath: 'https://avatars2.githubusercontent.com/u/18679468?v=3&s=60'

    };
    mockService.updatedProduct = {
      id: 1337,
      name: 'kewlbeans',
      price: 1995,
      quantitySold: 10,
      quantityInStock: 1338,
      imagePath: 'https://avatars2.githubusercontent.com/u/16033836?v=3&s=60'
    };
    component.products = [];
    component.products.push(mockService.updatedProduct);
    mockModal.pressedOk = true;
    mockToastr.success.calls.reset();

    component.onUpdateProduct(mockService.updatedProduct);
    expect(component.products[0].name).toBe(mockService.updatedProduct.name);
    expect(mockToastr.success).toHaveBeenCalled();


  });

  it('should mock successful product', () => {
    mockService.products = {
      id: 2,
      name: 'coolbeans',
      price: 8008,
      quantitySold: 32,
      quantityInStock: 42,
      imagePath: 'https://avatars2.githubusercontent.com/u/18679468?v=3&s=60'

    };
    mockService.updatedProduct = {
      id: 1337,
      name: 'kewlbeans',
      price: 1995,
      quantitySold: 10,
      quantityInStock: 1338,
      imagePath: 'https://avatars2.githubusercontent.com/u/16033836?v=3&s=60'
    };
    component.products = [];
    component.products.push(mockService.updatedProduct);
    component.onProductAdded();

    expect(component.products[0].name).toBe(mockService.updatedProduct.name);
    expect(mockToastr.success).toHaveBeenCalled();

  });


  it('should mock successful sellersupdate', () =>{
    mockService.seller = {
      id: 1,
      name: 'hax0r',
      category: 'asd',
      imagePath: 'https://www.hx0r.com/pic'

    };
    mockService.updateSeller = {
      id: 1337,
      name: 'hax0r12',
      category: 'asdf',
      imagePath: 'http://www.hx0r.com/pic'
    };

    expect(mockToastr.success).toHaveBeenCalled();
  });

});
