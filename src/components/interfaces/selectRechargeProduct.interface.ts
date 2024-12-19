import { Filterable } from './common.interface';

export interface RechargeProduct extends Filterable {
  id: number;
  name: string;
  short_name: string;
}
