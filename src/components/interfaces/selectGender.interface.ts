import { Filterable } from './common.interface';

export interface Gender extends Filterable {
  id: string;
  name: string;
  mnemonic: string;
  hint: string;
}
