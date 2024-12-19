import { Filterable } from '../common.interface';
import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { FilterBy } from '../selectFilterBy.interface';
import { Lottery } from '../selectLottery.interface';
import { Modality } from '../selectModality.interface';
import { Regional } from '../selectRegional.interface';
import { SaleChannel } from '../selectSaleChannel.interface';
import { SaleStatus } from '../selectSaleStatus.interface';
import { Seller } from '../selectSeller.interface';
import { Terminal } from '../selectTerminal.interface';
import { TransactionStatus } from '../selectTransactionStatus.interface';
import { orderType } from './CommonFilter.interface';

export type filteredByRdl02 = 'period_or_edition' | 'ticket';
export interface Rdl02Payload {
  filtered_by: filteredByRdl02;
  order_type: orderType;
  filtered_by_ticket?: {
    control: string;
  };
  filtered_by_period_or_edition?: {
    id_company: string;
    ids_lotteries: string[];
    ids_modalities?: string[];
    sale_channels: string[];
    id_regional?: string;
    ids_sellers?: string[];
    terminal_code?: string;
    ids_editions?: string[];
    start_date_time?: string;
    end_date_time?: string;
    payments_methods?: string[];
    transactions_statuses?: string[];
    customer_document?: string;
    customer_phone?: string;
    order_by?: string;
    pagination?: {
      page: number;
      qty_rows_per_page: number;
    };
    search?: string;
  };
  cached?: boolean;
}
export interface OptionsFilterByRdl02 extends FilterBy {
  payload: filteredByRdl02;
}

export interface Rdl02FiltersCache {
  base: Base | null;
  regional: Regional | null;
  seller: Seller[];
  sale_channel: SaleChannel[];
  lottery: Lottery | null;
  modality: Modality[];
  filterBy: string | null;
  editon: Edition[];
  terminal: string;
  initial_date: string;
  final_date: string;
  transaction: TransactionStatus[];
  statusPayment: SaleStatus[];
  numberTitle: string;
  cpfClient: string;
  phoneClient: string;
}
