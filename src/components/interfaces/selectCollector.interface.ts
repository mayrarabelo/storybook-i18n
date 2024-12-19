import { Filterable } from './common.interface';

export interface Collector extends Filterable {
  Code: string;
  CorporateName: string;
  Id: string;
  Name: string;
  ParentName: string;
  ShortName: string;
  Status: string;
}

export interface CollectorPayload {
  Regionals: { Id: string }[];
}
