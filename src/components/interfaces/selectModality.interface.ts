import { Filterable } from './common.interface';

export interface Modality extends Filterable {
  AwardMultiplier: string;
  ChangeDateTime: string;
  CreationDateTime: string;
  Id: string;
  IdProduct: string;
  MaxAwardValue: string;
  MaxBetValue: string;
  MinBetValue: string;
  Name: string;
  ShortName: string;
  TicketMultiplier: string;
  Type: string;
}
