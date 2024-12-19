import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { FilterBy } from '../selectFilterBy.interface';
import { Lottery } from '../selectLottery.interface';
import { Regional } from '../selectRegional.interface';
import { SaleChannel } from '../selectSaleChannel.interface';
import { orderType } from './CommonFilter.interface';

export type ViewByRdl03 = 'seller' | 'regional' | 'company';
export type FilterByRdl03 = 'edition' | 'period' | 'hour';
export type orderByRdl03 = 'id_seller' | 'id_regional' | 'id_company';

export interface Rdl03Payload {
  order_type: orderType;
  viewed_by: ViewByRdl03;
  filtered_by: FilterByRdl03;
  viewed_by_seller?: {
    id_company: string;
    id_regional: string;
    ids_lotteries: string[];
    order_by: orderByRdl03;
    sale_channels: string[];
  };
  viewed_by_regional?: {
    id_company: string;
    ids_regionals?: string[];
    ids_lotteries: string[];
    order_by: orderByRdl03;
    sale_channels: string[];
  };
  viewed_by_company?: {
    ids_companies: string[];
    ids_lotteries: string[];
    order_by: orderByRdl03;
    sale_channels: string[];
  };
  filtered_by_edition?: {
    id_edition: string;
  };
  filtered_by_period?: {
    start_date: string;
    end_date: string;
  };
  filtered_by_hour?: {
    date: string;
  };
  cached?: boolean;
}
export interface OptionsFilterByRdl03 extends FilterBy {
  payload: FilterByRdl03;
}

export interface Rdl03FiltersCache {
  view_type: ViewByRdl03 | null;
  base: Base[] | Base | null;
  regional: Regional[] | Regional | null;
  filter_by: FilterByRdl03 | null;
  lottery: Lottery[];
  edition: Edition | null;
  start_date: string;
  final_date: string;
  single_date: string;
  sale_channels: SaleChannel[];
}
