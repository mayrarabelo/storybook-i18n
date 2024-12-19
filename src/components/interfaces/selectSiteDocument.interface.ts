import { Filterable } from './common.interface';

export interface SiteDocument extends Filterable {
  attachment: string;
  creation_date_time: string;
  id: number;
  id_user: number;
  type: string;
  user_name: string;
}
