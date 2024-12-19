import { Filterable } from './common.interface';

export interface Bank extends Filterable {
  id: string;
  code: string;
  name: string;
  compensation_code: string;
}
