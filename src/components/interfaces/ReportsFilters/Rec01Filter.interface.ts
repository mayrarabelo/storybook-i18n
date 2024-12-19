import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';
import { orderType } from './CommonFilter.interface';

export type Rec01FilterBy = 'company' | 'regional' | 'seller';

export interface Rec01PayloadBase {
  viewed_by: Rec01FilterBy;
  older_start_date: string;
  older_end_date: string;
  newer_start_date: string;
  newer_end_date: string;

  order_type: orderType;
  cached?: boolean;
}

export interface Rec01PayloadCompany extends Rec01PayloadBase {
  viewed_by: 'company';
  viewed_by_company: {
    ids_companies: string[];
    order_by: 'id_company';
  };
}

export interface Rec01PayloadRegional extends Rec01PayloadBase {
  viewed_by: 'regional';
  viewed_by_regional: {
    id_company: string;
    ids_regionals: string[];
    order_by: 'id_regional';
  };
}

export interface Rec01PayloadSeller extends Rec01PayloadBase {
  viewed_by: 'seller';
  viewed_by_seller: {
    id_company: string;
    id_regional: string;
    order_by: 'id_seller';
    qty_rows: 25;
  };
}

export type Rec01Payload =
  | Rec01PayloadBase
  | Rec01PayloadCompany
  | Rec01PayloadRegional
  | Rec01PayloadSeller;

export interface Rec01FiltersCache {
  filter_by: Rec01FilterBy;
  base: Base[] | Base | null;
  regional: Regional[] | Regional | null;
  older_start_date: string;
  older_end_date: string;
  newer_start_date: string;
  newer_end_date: string;
}
