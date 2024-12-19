import { Filterable } from './common.interface';

export interface Seller extends Filterable {
  Code: string;
  CorporateName: string;
  Id: string;
  Name: string;
  ParentName: string;
  ShortName: string;
  Status: string;
}

interface RegionalId {
  Id: string;
}

export interface SellerPayload {
  Regionals: RegionalId[];
}
