import { Filterable } from './common.interface';

export interface PaymentOperator extends Filterable {
  Id: string;
  Code: string;
  Name: string;
  Status: string;
  CreationDateTime: string;
  ChangeDateTime: string;
}
