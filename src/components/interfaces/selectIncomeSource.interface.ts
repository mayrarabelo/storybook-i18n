import { Filterable } from './common.interface';

export interface IncomeSource extends Filterable {
  id: number;
  name: string;
  mnemonic: string;
  hint: string;
}
