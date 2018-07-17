import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

describe('AppService', () => {
  let injector;
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });

    injector = getTestBed();
    service = injector.get(AppService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getByOutcode', () => {
    const params = new HttpParams().set('q', 'se15');

    it('should return an Observable<Restaurant>', () => {
      service.getByOutcode(params)
        .subscribe(restaurant => {
          expect(restaurant.length).toBe(2);
          const req = httpMock.expectOne(environment.FAKE_URL +'?q=se19');
          expect(req.request.url).toBe(environment.FAKE_URL);
          expect(req.request.params).toEqual(params);
          expect(req.request.method).toBe('GET');
        });
    });
  });

});