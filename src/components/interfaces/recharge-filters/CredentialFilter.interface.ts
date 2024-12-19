import { FilterChip } from '../filterChips.interface';
import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';

export interface objectParams {
  operator: string;
  value: number;
}

export interface CredentialFilterCache {
  base: Base | null;
  regional: Regional[];
  integrator: FilterChip[];
  optionsIntegrators: FilterChip[];
  cached?: boolean;
}

export interface CredentialFilterPayload {
  id_base: objectParams[];
  id_regional: objectParams[];
  id_integrator: objectParams[];
}
