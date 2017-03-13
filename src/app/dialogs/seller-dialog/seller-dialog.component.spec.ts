import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerDialogComponent } from './seller-dialog.component';

describe('SellerDialogComponent', () => {
  let component: SellerDialogComponent;
  let fixture: ComponentFixture<SellerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDialogComponent ],
      providers: [{
        provide: NgbModal,
        useValue: NgbModal
      }, {
        provide: NgModel,
        useValue: NgModel
      }, {
        provide: NgbActiveModal,
        useValue: NgbActiveModal
      }],
      imports: [FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
