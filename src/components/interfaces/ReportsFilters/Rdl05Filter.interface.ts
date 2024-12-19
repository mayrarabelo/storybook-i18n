import { PaginationPayload, orderBy } from '../common.interface';
import { AwardPaymentStatus } from '../selectAwardPaymentStatus.interface';
import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { Lottery } from '../selectLottery.interface';
import { Modality } from '../selectModality.interface';
import { Regional } from '../selectRegional.interface';
import { SaleChannel } from '../selectSaleChannel.interface';

export type Rdl05FilterBy = 'control' | 'period' | 'edition';

export type Rdl05FilterByPayload = 'control' | 'period_or_edition';

export type Rdl05OrderByControl = 'sale_control';
export const RDL05_ORDER_CONTROL = ['sale_control'];

export type Rdl05OrderByEdition =
  | 'edition_number'
  | 'regional_code'
  | 'modality_name'
  | 'sale_creation_date_time';

export const RDL05_ORDER_EDITION = [
  'edition_number',
  'regional_code',
  'modality_name',
  'sale_creation_date_time',
];

export type Rdl05OrderByObj = {
  [k in Rdl05OrderByEdition]?: orderBy;
};

interface Rdl05PayloadBase {
  filtered_by: Rdl05FilterByPayload;
  order_type: orderBy;
  search?: string;
  cached?: boolean;
}
export interface Rdl05PayloadControl extends Rdl05PayloadBase {
  filtered_by: 'control';
  filtered_by_control: {
    transaction_control: string;
    order_by: Rdl05OrderByControl;
  };
}
export interface Rdl05PayloadEdition extends Rdl05PayloadBase {
  filtered_by: 'period_or_edition';
  filtered_by_period_or_edition: {
    id_company: string;
    sale_channels?: string[];
    ids_regionals?: string[];
    id_lottery: string;
    ids_modalities?: string[];
    id_edition?: string;
    start_date?: string;
    end_date?: string;
    award_statuses: string[];
    order_by: Rdl05OrderByEdition;
    pagination?: PaginationPayload;
  };
}

export type Rdl05Payload =
  | Rdl05PayloadBase
  | Rdl05PayloadControl
  | Rdl05PayloadEdition;

export interface Rdl05FiltersCache {
  filter_by: Rdl05FilterBy;
  base: Base | null;
  regional: Regional[];
  sale_channel: SaleChannel[];
  lottery: Lottery | null;
  modality: Modality[];
  edition: Edition | null;
  start_date?: string;
  final_date?: string;
  award_payment_status: FilterChip[];
  award_payment_status_options: FilterChip[];
  ticket_number: string | null;
}

export interface FilterChip {
  filterId: number;
  filterValue: string;
}
