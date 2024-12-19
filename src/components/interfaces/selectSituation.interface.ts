import { Filterable } from './common.interface';

export interface Situation extends Filterable {
  Id: string;
  Name: string;
  Mnemonic: string;
  Hint: string;
}
