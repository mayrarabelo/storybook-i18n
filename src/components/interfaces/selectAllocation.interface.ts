import { Filterable } from './common.interface';

export interface Allocation extends Filterable {
  Association: string;
  Bond: string;
  ClientPermission: string;
  Id: string;
  Initial: string;
  Lock: string;
  Name: string;
}
