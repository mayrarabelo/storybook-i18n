import { Filterable } from './common.interface';

export interface ViewType extends Filterable {
  Name: string;
  Mnemonic: string;
  Hint: string;
  label: string;
  value: string;
}
