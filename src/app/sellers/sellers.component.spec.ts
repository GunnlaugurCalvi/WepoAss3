import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { JumboSellersComponent } from './jumbo-sellers/jumbo-sellers.component';
import { Observable } from 'rxjs/Rx';
import { SellersService } from '../sellers.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersComponent } from './sellers.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

describe('SellersComponent', () => {
  let component: SellersComponent;
  let fixture: ComponentFixture<SellersComponent>;

  const mockService = {
    successGetSellers: false,
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
      declarations: [
        SellersComponent,
        JumboSellersComponent,
        ListSellersComponent
      ],
      imports: [
        RouterModule
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: RouterLink,
        useValue: RouterLink,
      }, {
        provide: Router,
        useValue: Router
      }, {
        provide: ActivatedRoute,
        useValue: ActivatedRoute
      }, {
        provide: NgbModal,
        useValue: NgbModal
      }, {
        provide: NgbActiveModal,
        useValue: NgbActiveModal
      }, {
        provide: ToastsManager,
        useValue: ToastsManager
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
