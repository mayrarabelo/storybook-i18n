import { ValidationRule } from 'quasar';

// export type ValidationFunction = (val: any, rules?: any) => string | true;
export type ValidationFunction = ValidationRule;

export interface SelectProps {
  multiselect?: boolean;
  searchable?: boolean;
  specialRules?: ValidationRule[];
  mandatory?: boolean;
  disableMe?: boolean;
  useChips?: boolean;
  findObject?: FindObject;
  titleI18n?: string;
  label?: string;
  placeholder?: string;
  mnemonicLabel?: boolean;
  clearable?: boolean;
  readonly?: boolean;
}

export interface SelectRef {
  resetValidation: () => void;
  validate: () => void;
  itHasError: () => void;
  clearChips: () => void;
  hasError: boolean;
}
export interface Filterable {
  filterId: number;
  filterValue: string;
  active?: boolean;
  Mnemonic?: string;
  mnemonic?: string;
  acronym?: string;
  id?: string | number;
  name?: string;
  Id?: string | number;
  // short_name?: string;
}

export interface FindObject {
  field: keyof Filterable;
  value: string | number;
}

export type orderBy = 'asc' | 'desc';

export interface PaginationPayload {
  page: number;
  qty_rows_per_page: number;
}

export interface PaginationResponse {
  prev_page: number;
  curr_page: number;
  next_page: number;
  qty_pages: number;
  qty_rows_per_page: number;
  total_rows: number;
}

export interface GridPagination {
  page: number;
  rowsPerPage: number;
  rowsNumber: number;
}

export interface Columns<T = any> {
  id: number;
  name: string;
  label: string;
  field: string | ((val: T) => string | undefined);
  format?:
    | string
    | ((val: any) => string | undefined)
    | ((val: any, row: T) => string | undefined);
  align: string | ((row: T) => string | undefined);
  translate: string;
  style?: string | ((row: T) => string | undefined);
  classes?: string | ((row: T) => string | undefined);
  value?: any;
  orderby?: string;
}

export interface GridParam {
  search?: string;
  pagination?: PaginationPayload;
  resetPagination?: boolean;
}
