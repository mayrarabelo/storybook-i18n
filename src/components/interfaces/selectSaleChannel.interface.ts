import { Filterable } from './common.interface';

export interface SaleChannel extends Filterable {
  ChangeDateTime: string;
  CreationDateTime: string;
  DisableDateTime: string;
  Hint: string;
  Id: string;
  IdSaleChannelGroup: string;
  Mnemonic: string;
  Name: string;
}
