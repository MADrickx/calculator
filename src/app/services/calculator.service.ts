import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GlobalConstants} from '../common/global-constants';
import {map} from 'rxjs/operators';
import { Product, ProductAdapter } from '../models/Product.model';

@Injectable()
export class CalculatorService {
  private products: Product[] = [];
  clientSubject = new Subject<Product[]>();
  apiPath = GlobalConstants.apiPath;
  httpOptions = GlobalConstants.httpOptions();
  httpOptionsImport = GlobalConstants.httpOptions();

  constructor(private http: HttpClient,private adapter: ProductAdapter) {
    const token = sessionStorage.getItem('token');
    this.httpOptions = GlobalConstants.httpOptions(token);
    this.httpOptionsImport = GlobalConstants.httpOptions(token, 'application/json');
  }




  getProduct(id: number): Promise<Product> {
    return new Promise<Product>(
      (resolve, reject) => {
        this.http.get(
          this.apiPath + 'product/' + id,
          this.httpOptions
        )
          .toPromise()
          .then((response: any) => {
            const client = this.adapter.adapt(response);
            resolve(client);
          }, error => {
            reject(error);
          });
      }
    );
  }
}
