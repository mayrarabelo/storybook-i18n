import { Filterable } from './common.interface';

export interface OperationsTypes extends Filterable {
  id: number;
  code?: string;
  acronym?: string;
  name: string;
  mnemonic: string;
  hint: string;
}
