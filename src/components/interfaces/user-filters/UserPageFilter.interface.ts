import { Base } from '../selectBase.interface';
import { Regional } from '../selectRegional.interface';
import { StatusType } from '../selectStatusType.interface';
import { UserProfile } from '../selectUserProfile.interface';

export interface UserPageFilterCache {
  bases: Base[] | null;
  regionals: Regional[] | null;
  profiles: UserProfile[] | null;
  status: StatusType[] | null;
  cached?: boolean;
}

export interface UserFilterPayload {
  profile_name: any;
  regionals: any;
  status: any;
  companies: any;
  auth: any;
}
