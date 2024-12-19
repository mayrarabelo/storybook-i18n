import { Filterable } from './common.interface';

export interface Model extends Filterable {
  ChangeDateTime: string;
  CreationDateTime: string;
  Description: string;
  Id: string;
  Name: string;
  SerialType: string;
  Status: string;
}
