import { AwardPaymentStatus } from '../selectAwardPaymentStatus.interface';
import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { Lottery } from '../selectLottery.interface';
import { Modality } from '../selectModality.interface';
import { orderType } from './CommonFilter.interface';

export interface Rdl06Payload {
  id_company: string;
  id_lottery: string;
  award_statuses: string[];
  ids_modalities: string[];
  id_start_edition: string;
  id_end_edition: string;
  search?: string;
  order_type?: orderType;
  order_by?: string;
  pagination?: {
    page: number;
    qty_rows_per_page: number;
  };
  cached?: boolean;
}

export interface Rdl06FiltersCache {
  base: Base | null;
  lottery: Lottery | null;
  modality: Modality[];
  start_edition: Edition | null;
  final_edition: Edition | null;
  award_statuses: AwardPaymentStatus[];
}
