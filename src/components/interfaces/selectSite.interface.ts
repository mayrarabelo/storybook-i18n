import { Filterable } from './common.interface';

export interface Site extends Filterable {
  companyId: number;
  creationDateTime: string;
  id: number;
  name: string;
  tag: string;
  type: string;
  url: string;
}

export interface SiteV2 extends Filterable {
  id: number;
  name: string;
  tag: string;
}
