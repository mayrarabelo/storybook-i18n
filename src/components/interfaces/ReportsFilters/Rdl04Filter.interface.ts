import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';
import { Lottery } from '../selectLottery.interface';
import { Edition } from '../selectEdition.interface';
import { ReprintAlert } from '../selectReprintAlert.interface';

export type filteredByRdl04 = 'period' | 'edition';
export interface Rdl04Payload {
  filtered_by: filteredByRdl04;
  id_company: string;
  ids_regionals: string[];
  id_lottery: string;
  id_edition?: string;
  start_date?: string;
  end_date?: string;
  slip_size_cm: number;
  paper_roll_size_cm: number;
  qty_rolls_per_box: number;
  reprint_alert: string[];
  order_type?: string;
  order_by?: string;
  search?: string;
  pagination?: {
    page: number;
    qty_rows_per_page: number;
  };
  export_settings?: {
    file_type: string;
    pages: string;
    profile: string;
  };
  cached?: boolean;
}

export interface Rdl04FiltersCache {
  filter_by: filteredByRdl04;
  base: Base | null;
  regionals: Regional[];
  lottery: Lottery | null;
  edition: Edition | null;
  start_date: string;
  end_date: string;
  slip_size_cm: string | null;
  paper_roll_size_cm: string | null;
  qty_roll_size_cm: string | null;
  reprint_alert: ReprintAlert[];
}
