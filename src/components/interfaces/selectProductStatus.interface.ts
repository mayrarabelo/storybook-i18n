import { Filterable } from './common.interface';

export interface ProductStatus extends Filterable {
  ChangeDateTime: string;
  CreationDateTime: string;
  DisableDateTime: string;
  Hint: string;
  Id: string;
  Mnemonic: string;
  Name: string;
}
