import { Filterable } from './common.interface';

export interface PhoneOperator extends Filterable {
  Id: string;
  Name: string;
  Status: string;
  CreationDateTime: string;
  ChangeDateTime: string;
  Iccid: string;
}
