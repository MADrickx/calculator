import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GlobalConstants} from '../common/global-constants';
import {map} from 'rxjs/operators';
import { Product, ProductAdapter } from '../models/Product.model';
import { Settings, SettingsAdapter } from '../models/Settings.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class SettingsService {
  private settings: Settings[] = [];
  clientSubject = new Subject<Settings[]>();
  apiPath = GlobalConstants.apiPath;
  httpOptions = GlobalConstants.httpOptions();
  httpOptionsImport = GlobalConstants.httpOptions();

  constructor(private http: HttpClient,private adapter: SettingsAdapter) {
    const token = sessionStorage.getItem('token');
    this.httpOptions = GlobalConstants.httpOptions(token);
    this.httpOptionsImport = GlobalConstants.httpOptions(token, 'application/json');
  }

  getSettings(id: number): Promise<Settings> {
    return new Promise<Settings>(
      (resolve, reject) => {
        this.http.get(
          this.apiPath + 'settings/' + id,
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

  saveAllSettings(form1:FormGroup, form2:FormGroup, form3:FormGroup){
    const formData1 = form1.value;
    const formData2 = form2.value;
    const formData3 = form3.value;
    const finalForm = {
      'inkPrice' : formData1,
      'optionsPrices' : formData2,
      'supports' : formData3
    }
    console.log(finalForm);

  }
}
