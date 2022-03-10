import {Injectable} from '@angular/core';
import { Adapter } from '../core/adapter';
export class Settings {
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
export class SettingsAdapter implements Adapter<Settings> {
  adapt(item: any): Settings {
    return new Settings(
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
