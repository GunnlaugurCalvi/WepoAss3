import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import { RouterLink } from '@angular/router';
import { NgbAlertConfig, NgbTab, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { CardProductComponent } from './card-product/card-product.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsComponent, CardProductComponent ],
      providers: [{
        provide: NgbTab,
        useValue: NgbTab
      }, {
        provide: NgbTabsetConfig,
        useValue: NgbTabsetConfig
      }, {
        provide: NgbAlert,
        useValue:  NgbAlert
      }, {
        provide: NgbAlertConfig,
        useValue: NgbAlertConfig
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
