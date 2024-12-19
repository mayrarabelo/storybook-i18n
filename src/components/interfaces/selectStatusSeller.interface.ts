import { Filterable } from './common.interface';

export interface StatusSeller extends Filterable {
  id: number;
  name: string;
  mnemonic: string;
  hint: string;
}
