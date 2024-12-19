import { PaginationPayload } from '../common.interface';
import { FilterChip } from '../filterChips.interface';
import { Base } from '../selectBase.interface';
import { Integrator } from '../selectIntegrator.interface';
import { Operator } from '../selectOperator.interface';
import { RechargeProduct } from '../selectRechargeProduct.interface';
import { Regional } from '../selectRegional.interface';
import { Seller } from '../selectSeller.interface';
import { Situation } from '../selectSituation.interface';
import { orderType } from './CommonFilter.interface';

export type orderByRec02 =
  | 'id_transaction'
  | 'uuid_transaction'
  | 'transaction_date_time'
  | 'sale_channel'
  | 'seller_code'
  | 'seller_name'
  | 'transaction_status'
  | 'top_up_product_name'
  | 'integrator_name'
  | 'phone_carrier_name'
  | 'customer_phone'
  | 'customer_document'
  | 'transaction_value'
  | 'commission_value'
  | 'net_value';

export interface Rec02Payload {
  id_company: string;
  id_regional: string;
  ids_sellers?: string[];
  id_phone_carrier?: string;
  id_integrator?: string;
  id_top_up_product?: string;
  transactions_statuses?: string[];
  start_date_time: string;
  end_date_time: string;
  sales_statuses?: string[];

  search?: string;
  order_type?: orderType;
  order_by?: orderByRec02;
  pagination?: PaginationPayload;
  cached?: boolean;
}

export interface Rec02FiltersCache {
  base: Base | null;
  regional: Regional | null;
  seller: Seller[];
  operator: Operator | null;
  integrator: Integrator | null;
  product: RechargeProduct | null;
  // status: RechargeStatus[];
  start_date_time: string;
  final_date_time: string;
  sales_status: FilterChip[];
  sales_status_options: FilterChip[];
}
