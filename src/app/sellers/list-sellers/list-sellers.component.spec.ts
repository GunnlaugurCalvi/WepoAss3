import { Router } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListSellersComponent } from './list-sellers.component';

describe('ListSellersComponent', () => {
  let component: ListSellersComponent;
  let fixture: ComponentFixture<ListSellersComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSellersComponent ],
      providers: [{
        provide: Router,
        useValue: mockRouter
      }],
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

  it('get routed to seller', () => {
    component.routeToSeller(1);
    expect(mockRouter.navigate).toHaveBeenCalled();
  });

});
