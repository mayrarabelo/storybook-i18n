import { Filterable } from './common.interface';

export interface CEP extends Filterable {
  zip_code: string;
  street: string;
  complement: string;
  neighboard: string;
  city: string;
  state: string;
}
