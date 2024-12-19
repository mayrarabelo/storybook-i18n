import { ProductType } from 'src/components/interfaces/selectProductType.interface';
import { ModalityType } from 'src/components/interfaces/selectModalityType.interface';

export interface objectParams {
  operator: string;
  value: number | string;
}

export interface ModalityFilterCache {
  product: ProductType | null;
  modality: ModalityType | null;
  colType: string;
  cached?: boolean;
}

export interface ModalityFilterPayload {
  id_product: objectParams[];
  type?: objectParams[];
}
