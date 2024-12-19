import { Filterable } from './common.interface';

export interface ProductType extends Filterable {
  Id: string;
  Name: string;
  Hint: string;
  Mnemonic: string;
  Code: string;
  Status: string;
  Type: string;
  TicketValidity: string;
  Params?: ParamsProduct;
  CreationDateTime: string;
  ChangeDateTime: string;
  DisableDateTime: string;
}

export interface ParamsProduct {
  card_structure: string;
  family_mask: string;
  max_card_number: string;
  required_hits: string;
  sale_mask: string;
  sequential_mask: string;
  ticket_mask: string;
  DisableDateTime: string;
  defaultLabel?: string;
}
