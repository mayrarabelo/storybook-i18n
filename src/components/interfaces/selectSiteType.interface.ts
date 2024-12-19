import { Filterable } from './common.interface';

export interface SiteType extends Filterable {
  creationDateTime: string;
  hint: string;
  id: number;
  mnemonic: string;
  name: string;
}
