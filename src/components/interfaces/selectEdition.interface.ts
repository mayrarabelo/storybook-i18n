import { Filterable } from './common.interface';

export interface Edition extends Filterable {
  DrawDateTime: string;
  EndDateTime: string;
  Id: string;
  IdLottery: string;
  IdProduct: string;
  IdSaleNetwork: string;
  LoteryName: string;
  Number: string;
  ProductName: string;
  ResultStatus: string;
  StartDateTime: string;
  Status: string;
}

interface LotteryId {
  Id: string;
}

export interface EditionPayload {
  Lotteries: LotteryId[];
}
