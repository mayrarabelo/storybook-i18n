import { Filterable } from './common.interface';

export interface Terminal extends Filterable {
  Id: string;
  TerminalCode: string;
}

export interface TerminalPayload {
  Id: string;
}
