import { Filterable } from './common.interface';

export interface Products extends Filterable {
  ChangeDateTime: string;
  Code: string;
  CreationDateTime: string;
  Id: string;
  Name: string;
  Params: ProductsParam;
  RedemptionPercentage: string;
  Status: string;
  TicketValidity: string;
  Type: string;
}

interface ProductsParam {
  card_structure: string;
  family_mask: string;
  max_card_number: string;
  required_hits: string;
  sale_mask: string;
  sequential_mask: string;
  ticket_mask: string;
}
