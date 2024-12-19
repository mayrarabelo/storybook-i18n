import { Filterable } from './common.interface';

export interface Base extends Filterable {
  Code: string;
  CorporateName: string;
  Id: string;
  Name: string;
  ShortName: string;
  Status: string;
  StructureName: string;
}
