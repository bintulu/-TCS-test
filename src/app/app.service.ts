import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Restaurant } from './app.component';
import { Observable } from 'rxjs';

const headers = new HttpHeaders().set( 'Accept-Tenant', 'uk').set('Accept-Language', 'en-GB').set('Authorization', 'Basic VGVjaFRlc3RBUEk6dXNlcjI=').set('Content-Type', 'application/json');
const param = 'q';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) { }
    getByOutcode(outcode): Observable<Restaurant[]> {
      const params = new HttpParams().set(param, outcode);
      return this.httpClient.get<Restaurant[]>(environment.URL, {headers, params});
    }
}