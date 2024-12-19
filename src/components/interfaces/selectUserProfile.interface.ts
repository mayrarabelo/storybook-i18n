import { Filterable } from './common.interface';

export interface UserProfile extends Filterable {
  id: string;
  id_profile_parent: string;
  name: string;
  creation_date_time: string;
  change_date_time: string;
  hash: string;
  status: string;
}
