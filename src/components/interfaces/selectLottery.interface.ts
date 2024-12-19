import { Filterable } from './common.interface';

export interface Lottery extends Filterable {
  Id: string;
  IdProduct: string;
  IdSaleNetwork: string;
  Name: string;
  Status: string;
  StatusName: string;
}

interface CompanyId {
  Id: string;
}

export interface LotteryPayload {
  Companies: CompanyId[];
}
