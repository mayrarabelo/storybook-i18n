import { UserProfile } from '../selectUserProfile.interface';

export interface UserProfilePayload {
  id_profile_parent?: ObjectParams[];
  status?: ObjectParams[];
  _search_?: ObjectParams[];
  _search_fields_?: SearchField[];
}

export interface UserProfileFilterCache {
  id_profile: UserProfile[];
}

export interface ObjectParams {
  operator: string;
  value: number | string;
}

export interface SearchField {
  value: string;
}
export interface UserProfileData {
  params: UserProfilePayload[];
  cached?: boolean;
}
