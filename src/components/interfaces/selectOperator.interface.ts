import { Filterable } from './common.interface';

export interface Operator extends Filterable {
  id: number;
  name: string;
  short_name: string;
}
