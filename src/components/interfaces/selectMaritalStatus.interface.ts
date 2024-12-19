import { Filterable } from './common.interface';

export interface MaritalStatus extends Filterable {
  id: string;
  name: string;
  mnemonic: string;
  hint: string;
}
