import { Filterable } from '../common.interface';
import { TimezoneData } from 'src/components/interfaces/user-filters/TimeZone.interface';

export interface ManageSchedule extends Filterable {
  Id: string;
  IdCountry: string;
  Name: string;
  Timezone: string;
  Active: string;
  CreationDateTime: string;
  ChangeDateTime: string;
  cached: boolean;
}

export interface ScheduleParams {
  day_1?: ObjectParams[];
  day_2?: ObjectParams[];
  day_3?: ObjectParams[];
  day_4?: ObjectParams[];
  day_5?: ObjectParams[];
  day_6?: ObjectParams[];
  day_7?: ObjectParams[];
  start_time?: ObjectParams[];
  end_time?: ObjectParams[];
  id_local_timezone?: ObjectParams[];
}

export interface ManageScheduleFilterCache {
  days: DaysOfWeek[];
  start_time: string;
  end_time: string;
  local_timezone: TimezoneData[];
  cached?: boolean;
}

export interface DaysOfWeek {
  label: string;
  value: string;
  filterId: number;
  filterValue: string;
}

export interface ObjectParams {
  operator: string;
  value: string;
}
