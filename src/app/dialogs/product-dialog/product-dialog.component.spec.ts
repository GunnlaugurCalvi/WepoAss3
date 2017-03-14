import { NgModel } from '@angular/forms/src/directives';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductDialogComponent } from './product-dialog.component';



describe('ProductDialogComponent', () => {
  let component: ProductDialogComponent;
  let fixture: ComponentFixture<ProductDialogComponent>;

  const mockModal = {
    dismiss: jasmine.createSpy("dismiss"),
    close: jasmine.createSpy("close")
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDialogComponent ],
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
    fixture = TestBed.createComponent(ProductDialogComponent);
    component = fixture.componentInstance;
    component.product =  {
      id: 1,
      name: 'hax0r',
      price: 1337,
      quantityInStock: 1234,
      quantitySold: 4321,
      imagePath: 'http://www.hx0r.com/pic'
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
    component.onOk(component.product);
    expect(mockModal.close).toHaveBeenCalled();
  })
});
