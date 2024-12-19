import { PaginationPayload, orderBy } from '../common.interface';
import { Activity } from '../selectActivity.interface';
import { Allocation } from '../selectAllocation.interface';
import { Base } from '../selectBase.interface';
import { Model } from '../selectModel.interface';
import { Regional } from '../selectRegional.interface';

export type Rpr01Activity = 'active' | 'inactive';
export type Rpr01OrderBy =
  | 'company_code'
  | 'company'
  | 'regional_code'
  | 'regional'
  | 'allocation'
  | 'model';

export interface Rpr01Payload {
  ids_companies: string[];
  ids_regionals: string[];
  ids_allocations?: string[];
  ids_models?: string[];
  activity?: Rpr01Activity;

  search?: string;
  order_type?: orderBy;
  order_by?: Rpr01OrderBy;
  pagination?: PaginationPayload;
  cached?: boolean;
}

export interface Rpr01FiltersCache {
  bases: Base[];
  regionals: Regional[];
  allocations: Allocation[];
  models: Model[];
  activity: Activity | null;
}
