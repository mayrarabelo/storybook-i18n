import { Filterable } from './common.interface';

export interface SavedFilters extends Filterable {
  id: string;
  name: string;
  path: string;
  data: string;
  creation_date_time: string;
}
