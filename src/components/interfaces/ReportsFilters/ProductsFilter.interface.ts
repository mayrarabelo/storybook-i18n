import { ProductStatus } from '../selectProductStatus.interface';
import { ProductType } from '../selectProductType.interface';

export interface objectParams {
  operator: string;
  value: number | string;
}

export interface ProductsPayload {
  type: objectParams[];
  status: objectParams[];
  cached?: boolean;
}

export interface ProductFilterCache {
  type: ProductType[];
  status: ProductStatus[];
}
