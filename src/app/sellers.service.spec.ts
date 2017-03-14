/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';



describe('SellersService', () => {
  let service;
  let backend;


  const mockCalls = {
    get: jasmine.createSpy('get'),
    post: jasmine.createSpy('post'),
    put: jasmine.createSpy('put'),
    map: jasmine.createSpy('map')
  };

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
      providers: [ MockBackend, BaseRequestOptions, {
        provide: Http,
        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
        SellersService
      ]});
  });
  beforeEach(inject([ SellersService, MockBackend], (userService: SellersService, mockBackend: MockBackend) => {
    service = userService;
    backend = mockBackend;
  }));

  it('blabla', () => {
    service.getSellers();
    expect(mockCalls.get).not.toHaveBeenCalled();
  });

  it('should...', async(() => {
    mockHttp.get('http://localhost:5000/api/sellers').map(response => {
      expect(response).toEqual(mockHttp.mockSellersList);
    });
  }));

  it('should send....', (done) => {
    done();
  });

  it('should call getSellers', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions(mockHttp.mockSeller);
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });

    service.getSellers().subscribe(resp => {
      expect(resp)
    });
    done();
  });

  it('should call getSellerbyId', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({id: 1})
      });

      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });
    service.getSellerById(1).subscribe(resp => {
      expect(resp).toEqual({id: 1});
      done();
    })
  });


  it('should call getProducts', (done) =>{
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({id: 1})
      });

      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
    });
    service.getProducts(1).subscribe(resp => {
      expect(resp).toEqual({id: 1});
      done();
    })
  });

  it('should call updateProduct', async(() => {
    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: { sellerid: 3,
                productid: 2}
      })));
      expect(connection.request.method).toEqual(RequestMethod.Put);
    });
    service.updateProduct(3, 2).subscribe(resp => {
      expect(resp).toBeDefined();
      expect(resp.sellerid).toBe(3);
      expect(resp.productid).toBe(2);
      // done();
    });
  }));

  it('should call addProduct', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: { sellerid: 1337,
                productid: 42}
      })));
      expect(connection.request.method).toEqual(RequestMethod.Post);
    });
    service.addProduct(1337, 42).subscribe(resp => {
      expect(resp).toBeDefined();
      expect(resp.sellerid).toBe(1337);
      expect(resp.productid).toBe(42);
      done();
    })
  });

  it('should call addSeller', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: { sellerid: 1337 }
      })));
      expect(connection.request.method).toEqual(RequestMethod.Post);
    });
    service.addSeller(1337).subscribe(resp => {
      expect(resp).toBeDefined();
      expect(resp.sellerid).toBe(1337);
      done();
    })
  });

  it('should call updateSeller', async(() => {
    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: { sellerid: 3 }
      })));
      expect(connection.request.method).toEqual(RequestMethod.Put);
    });
    service.updateSeller(3).subscribe(resp => {
      expect(resp).toBeDefined();
      expect(resp.sellerid).toBe(3);
    });
  }));
});
