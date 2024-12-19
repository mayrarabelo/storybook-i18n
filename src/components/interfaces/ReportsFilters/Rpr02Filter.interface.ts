import { Base } from '../selectBase.interface';
import { ChannelType } from '../selectChannelType.interface';
import { Collector } from '../selectCollector.interface';
import { Regional } from '../selectRegional.interface';
import { Seller } from '../selectSeller.interface';
import { orderType } from './CommonFilter.interface';

export interface Situation {
  Id: number;
  Value: string;
  Name: string;
  typeInput?: string;
  defaultLabel?: string;
}

export interface Rpr02Payload {
  id_company: string;
  id_regional: string;
  start_date_time: string;
  end_date_time: string;

  id_collector?: string;
  id_seller?: string;
  channels?: string[];
  terminal_code?: string;

  search?: string;
  order_type?: orderType;
  order_by?: string;
  pagination?: {
    page: number;
    qty_rows_per_page: number;
  };

  cached?: boolean;
}

export interface Rpr02FiltersCache {
  base: Base | null;
  regional: Regional | null;
  collector: Collector | null;
  seller: Seller | null;
  startDate: string;
  finalDate: string;
  channel: ChannelType[];
  terminal: string;
  situation: Situation[];
}
