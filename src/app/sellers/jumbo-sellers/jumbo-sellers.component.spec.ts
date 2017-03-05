/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JumboSellersComponent } from './jumbo-sellers.component';

describe('JumboSellersComponent', () => {
  let component: JumboSellersComponent;
  let fixture: ComponentFixture<JumboSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
