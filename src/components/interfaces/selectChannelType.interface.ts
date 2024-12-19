import { Filterable } from './common.interface';

export interface ChannelType extends Filterable {
  ChangeDateTime: string;
  CreationDateTime: string;
  DisableDateTime: string;
  Hint: string;
  Id: string;
  Mnemonic: string;
  Name: string;
}
