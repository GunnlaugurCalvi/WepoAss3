/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaresComponent } from './wares.component';

describe('WaresComponent', () => {
  let component: WaresComponent;
  let fixture: ComponentFixture<WaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
