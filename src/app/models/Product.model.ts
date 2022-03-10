import {Injectable} from '@angular/core';
import { Adapter } from '../core/adapter';
export class Product {
  constructor(
    public id: number | null = null,
    public support: string | null = null,
    public length: number | null = null,
    public width: number | null = null,
    public quantity: number | null = null,
    public price: number | null = null,
    public type: string | null = null,
  ) {
  }
}

@Injectable()
export class ProductAdapter implements Adapter<Product> {
  adapt(item: any): Product {
    return new Product(
      item.id,
      item.support,
      item.length,
      item.width,
      item.quantity,
      item.price,
      item.type,
    );
  }
}
