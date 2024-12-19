import { Filterable } from './common.interface';

export interface Kinship extends Filterable {
  id: number;
  name: string;
  mnemonic: string;
  hint: string;
}
