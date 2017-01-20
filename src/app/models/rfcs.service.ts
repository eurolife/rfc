import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { RFCSummary } from './rfc-summary.model'
import { rfcMain } from './rfc-main.model'

@Injectable()
export class RFCsService {
  private serviceUrl = 'http://localhost:2961/api/rfcs';
  constructor(private http: Http) { }

  getRFCs(): Observable<RFCSummary[]> {
      return this.http.get(this.serviceUrl)
      .map((response: Response) => <RFCSummary[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  
  
  getRFC(id: number): Observable<rfcMain> {
    return this.http.get(`${this.serviceUrl}/${id}`)
      .map((response: Response) => <rfcMain>response.json())
      //.map((response: Response) => this.extractData(response))
      .do(data => console.log('RFC: ' + JSON.stringify(data)))
      .catch(this.handleError);
    
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

}
