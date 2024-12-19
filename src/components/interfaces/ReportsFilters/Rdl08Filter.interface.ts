import { FilterChip } from '../filterChips.interface';
import { Base } from '../selectBase.interface';
import { PaymentMethod } from '../selectPaymentMethod.interface';
import { PaymentOperator } from '../selectPaymentOperator.interface';
import { Regional } from '../selectRegional.interface';
import { SaleChannel } from '../selectSaleChannel.interface';
import { Seller } from '../selectSeller.interface';
import { Site } from '../selectSite.interface';
import { Terminal } from '../selectTerminal.interface';
import { TransactionStatus } from '../selectTransactionStatus.interface';

export interface Rdl08Payload {
  id_company: string;
  start_date: string;
  end_date: string;

  ids_regionals?: string[];
  ids_sellers?: string[];
  sale_channel?: string;
  ids_terminals?: string[];
  payment_methods?: string[];
  id_payment_integrator?: string;
  transaction_status?: string[];
  sites_tag?: string[];
  customer_document?: string;
  customer_phone?: string;
  customer_email?: string;

  order_type?: string;
  order_by?: string;
  search?: string;
  pagination?: {
    page: number;
    qty_rows_per_page: number;
  };

  cached?: boolean;
}

export interface Rdl08FiltersCache {
  sale_channel: SaleChannel | null;
  base: Base | null;
  regional: Regional[];
  start_date: string;
  final_date: string;
  seller: Seller[];
  terminal: Terminal[];
  payment_method: FilterChip[];
  payment_method_options: FilterChip[];
  payment_integrator: FilterChip[];
  paymeny_integrator_options: FilterChip[];
  transaction_status: FilterChip[];
  transaction_status_options:  FilterChip[];
  site: Site[];
  customer_document: string;
  customer_phone: string;
  customer_email: string;
}
