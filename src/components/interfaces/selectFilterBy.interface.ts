import { Filterable } from './common.interface';

export interface FilterBy<T = string> extends Filterable {
  label: string;
  value: T;
  payload?: string;
}
