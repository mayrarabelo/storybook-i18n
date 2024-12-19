import { Filterable } from './common.interface';

export interface Income extends Filterable {
  id: number;
  name: string;
  mnemonic: string;
  hint: string;
}
