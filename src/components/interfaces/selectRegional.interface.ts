import { Filterable } from './common.interface';

export interface Regional extends Filterable {
  Code: string;
  CorporateName: string;
  Id: string;
  Name: string;
  ParentName: string;
  ShortName: string;
  Status: string;
  StructureName: string;
}

interface CompanyId {
  Id: string;
}

export interface RegionalPayload {
  Companies: CompanyId[];
}
