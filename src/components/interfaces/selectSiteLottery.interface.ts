import { Filterable } from './common.interface';

export interface SiteLottery extends Filterable {
  id_lottery: number;
  logo_url: string;
  name_lottery: string;
}
