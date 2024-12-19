import { Filterable } from './common.interface';

export interface ModalityType extends Filterable {
  Id: string;
  Name: string;
  Mnemonic: string;
  Hint: string;
  CreationDateTime: string;
  ChangeDateTime: string;
  DisableDateTime: string;
}
