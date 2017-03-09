/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http } from '@angular/http';

describe('SellersService', () => {

  const mockHttp = {
    mockSellersList: [{
      'id': 1,
      'name': 'Nammiland',
      'category': 'Nammisala',
      'imagePath': 'dyraklam.is'
    }],
    mockSeller: {
      'id': 1,
      'name': 'Nammiland',
      'category': 'Nammisala',
      'imagePath': 'dyraklam.is'
    },
    mockProductList: [{
      'id': 1,
      'name': 'Kíló af nammi',
      'price': 1899,
      'quantitySold': 500,
      'quantityInStock': 12,
      'imagePath': 'http://i.imgur.com/MZOmRnH.jpg'
    }],
    get: function(str: string) {
      return {
        map: function ( result ) {
          if (str === 'http://localhost:5000/api/sellers') {
            result = mockHttp.mockSellersList;
          } else if (str === 'seller') {
            result = mockHttp.mockSeller;
          } else if (str === 'productList') {
            result = mockHttp.mockProductList;
          } else {
            result = 'ERROR';
          }
        }
      };
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersService ],
      providers: [{
        provide: Http,
        useValue: mockHttp
      }]
    });
  });

  it('should...', async(() => {
    mockHttp.get('http://localhost:5000/api/sellers').map(response => {
      expect(response).toEqual(mockHttp.mockSellersList);
    });
  }));

});
