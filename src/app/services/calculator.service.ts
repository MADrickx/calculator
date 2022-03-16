import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GlobalConstants} from '../common/global-constants';
import {map} from 'rxjs/operators';
import { Product, ProductAdapter } from '../models/Product.model';

@Injectable()
export class CalculatorService {
  apiPath = GlobalConstants.apiPath;
  httpOptions = GlobalConstants.httpOptions();
  httpOptionsImport = GlobalConstants.httpOptions();

  constructor(private http:HttpClient) {
    const token = sessionStorage.getItem('token');
    this.httpOptions = GlobalConstants.httpOptions(token);
    this.httpOptionsImport = GlobalConstants.httpOptions(token, 'application/json');
  }
  getSupports(){
    return this.http.get(
      this.apiPath + 'support/getSupports',
        this.httpOptions
    )
  }

  getPrices(values:any){
    return this.http.post(
      this.apiPath + 'price/getPrices',
        values,
        this.httpOptions
    )
  }
}
