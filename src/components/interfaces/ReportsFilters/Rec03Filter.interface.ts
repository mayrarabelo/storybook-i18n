import { PaginationPayload } from '../common.interface';
import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';
import { orderType } from './CommonFilter.interface';

export type filteredByRec03 = 'seller' | 'regional';
export type orderByRec03 =
  | 'name'
  | 'qty_sellers'
  | 'number_of_days_with_sales'
  | 'qty_transactions'
  | 'qty_sales'
  | 'sales_value'
  | 'average_sales_per_day'
  | 'average_sales_per_business_days'
  | 'sale_channels';

export interface OrderByRec03 {
  id?: orderType;
  code?: orderType;
  name?: orderType;
  qty_sellers?: orderType;
  number_of_days_with_sales?: orderType;
  qty_transactions?: orderType;
  qty_sales?: orderType;
  sales_value?: orderType;
  average_sales_per_day?: orderType;
  average_sales_per_business_days?: orderType;
  sale_channels?: orderType;
}

export interface Rec03Payload {
  order_type: orderType;
  start_date_time: string;
  end_date_time: string;
  id_company: string;
  cached?: boolean;
}

export interface Rec03PayloadSeller extends Rec03Payload {
  viewed_by: 'seller';
  viewed_by_seller: {
    id_regional: string;
    order_by: orderByRec03;
    pagination?: PaginationPayload;
  };
}

export interface Rec03PayloadRegional extends Rec03Payload {
  viewed_by: 'regional';
  viewed_by_regional: {
    order_by: orderByRec03;
  };
}

export interface Rec03FiltersCache {
  base: Base | null;
  regional: Regional | null;
  filterBy: filteredByRec03 | null;
  initial_date: string;
  final_date: string;
}
