import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';
import { Edition } from '../selectEdition.interface';
import { FilterBy } from '../selectFilterBy.interface';
import { Lottery } from '../selectLottery.interface';

export interface objectParams {
  operator: string;
  value: number;
}

export interface SellerFilterCache {
  base: Base | null;
  lottery: Lottery | null;
  edition: Edition[];
  status: any[];
  document: string;
  cached: boolean;
}

export interface ParamsSeller {
  ids_companies: string[];
  ids_lotteries: string[];
  ids_editions: string[];
  cpf: string;
  statuses: string[];
}

export interface SellerFilterPayload {
  data: ParamsSeller;
  cached: boolean;
}
