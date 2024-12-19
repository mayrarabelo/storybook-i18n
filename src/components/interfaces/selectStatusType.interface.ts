import { Filterable } from './common.interface';

export interface StatusType extends Filterable {
  Id: number | string;
  Name: string;
  Mnemonic: string;
  Hint: string;
  CreationDateTime: string;
  ChangeDateTime: string;
  DisableDateTime: string;
}
