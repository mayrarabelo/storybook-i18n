import { Filterable } from './common.interface';

export interface SiteDocumentType extends Filterable {
  creationDateTime: string;
  hint: string;
  id: number;
  mnemonic: string;
  name: string;
}
