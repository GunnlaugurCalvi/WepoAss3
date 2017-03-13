import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListSellersComponent } from './list-sellers.component';

describe('ListSellersComponent', () => {
  let component: ListSellersComponent;
  let fixture: ComponentFixture<ListSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSellersComponent ],
      providers: [{
        provide: RouterLink,
        useValue: RouterLink
      }, {
        provide: Router,
        useValue: Router
      }, {
        provide: ActivatedRoute,
        useValue: ActivatedRoute
      }],
      imports: [
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component is defined', () => {
    expect(component).toBeDefined();
  });

  // it('get routed to seller', () => {
  //   component.routeToSeller(1);
  //   expect(mockRouter.navigate).toHaveBeenCalled();
  // });

});
