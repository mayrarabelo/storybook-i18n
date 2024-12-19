import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { FilterBy } from '../selectFilterBy.interface';
import { Lottery } from '../selectLottery.interface';
import { Regional } from '../selectRegional.interface';
import { orderType } from './CommonFilter.interface';

export type filteredByRdl01 = 'company' | 'regional' | 'seller';
export type orderByRdl01 =
  | 'id_company'
  | 'id_regional'
  | 'id_seller'
  | 'sales_value'
  | 'sales_value_increase_percent';

export interface OptionsFilterByRdl01 extends FilterBy {
  value: filteredByRdl01;
}

export interface Rdl01FiltersCache {
  filterBy: filteredByRdl01 | null;
  orderBy: string | null;
  base: Base | Base[] | null;
  regional: Regional[] | Regional | null;
  lottery: Lottery | null;
  edition: Edition | null;
  edition_ref: Edition | null;
}

export interface Rdl01Payload {
  filtered_by: filteredByRdl01;
  order_type: orderType;
  id_older_edition: string;
  id_newer_edition: string;
  filtered_by_seller?: {
    id_company: string;
    id_regional: string;
    id_lottery: string;
    order_by: orderByRdl01;
    qty_rows: 25;
  };
  filtered_by_regional?: {
    id_company: string;
    ids_regionals: string[];
    id_lottery: string;
    order_by: orderByRdl01;
  };
  filtered_by_company?: {
    ids_companies: string[];
    id_lottery: string;
    order_by: orderByRdl01;
  };
  cached?: boolean;
}

export interface Rdl01PayloadDetails {
  filtered_by: filteredByRdl01;
  order_type: orderType;
  id_older_edition: string;
  id_newer_edition: string;
  filtered_by_seller?: {
    id_seller: string;
    id_lottery: string;
  };
  filtered_by_regional?: {
    id_regional: string;
    id_lottery: string;
  };
  filtered_by_company?: {
    id_company: string;
    id_lottery: string;
  };
  cached?: boolean;
}
