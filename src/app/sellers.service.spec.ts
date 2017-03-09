/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http } from '@angular/http';

describe('SellersService', () => {
  let service;

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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Http],
      providers: [SellersService]
    });
  });

  beforeEach(inject([SellersService], s => {
    service = s;
  }));

  it('should...', async(() => {
    service.get().subscribe(x => {
      expect(x).toContain(mockService.sellersList);
    });
  }));
});
