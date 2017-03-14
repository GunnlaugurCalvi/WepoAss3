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

  const mockModal = {
    dismiss: jasmine.createSpy("dismiss"),
    close: jasmine.createSpy("close")
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDialogComponent ],
      imports: [FormsModule, ReactiveFormsModule],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDialogComponent);
    component = fixture.componentInstance;
    component.seller =  {
      id: 1,
      name: 'hax0r',
      category: 'asd',
      imagePath: 'https://www.hx0r.com/pic'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onCancel on modal dialog', () =>{
    component.onCancel();
    expect(mockModal.dismiss).toHaveBeenCalled();
  });

  it('should call onOk on modal dialog', () => {
    component.onOk();
    expect(mockModal.close).toHaveBeenCalled();
  });
});
