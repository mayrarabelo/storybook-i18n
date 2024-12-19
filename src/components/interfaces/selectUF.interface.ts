import { Filterable } from './common.interface';

export interface UF extends Filterable {
  id: string;
  code: string;
  acronym: string;
}
