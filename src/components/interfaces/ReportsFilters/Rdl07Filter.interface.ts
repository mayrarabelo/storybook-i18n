import { Base } from '../selectBase.interface';
import { Edition } from '../selectEdition.interface';
import { Lottery } from '../selectLottery.interface';

export type filteredByRdl07 = 'period' | 'edition';
export interface Rdl07Payload {
  filtered_by: filteredByRdl07;
  id_company: string;
  id_lottery: string;
  ids_editions?: string[];
  start_date?: string;
  end_date?: string;
  cached?: boolean;
}

export interface Rdl07FiltersCache {
  filter_by: filteredByRdl07;
  base: Base | null;
  lottery: Lottery | null;
  edition?: Edition[];
  start_date?: string | null;
  final_date?: string | null;
  cached?: boolean;
}
