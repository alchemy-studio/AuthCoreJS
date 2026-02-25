/**
 * Aligned with AuthCore htyuc_models: HtyUserGroup, GroupUser
 */

import type { MultiVals } from './common';
import type { HtyBaseRoles } from './role';

export enum GroupTypes {
  TeacherWithStudent = 'TeacherWithStudent',
  StudentGroup = 'StudentGroup',
  TeacherGroup = 'TeacherGroup',
}

export interface GroupUser {
  user_id: string;
  real_name: string;
  user_type?: HtyBaseRoles | string;
  role_id?: string;
}

export interface UserGroup {
  id: string;
  app_id: string;
  group_name: string;
  group_desc?: string;
  group_type: GroupTypes | string;
  users: MultiVals<GroupUser>;
  parent_id?: string;
  created_at: Date | string;
  created_by: string;
  creator_name?: string;
  is_delete: boolean;
  owners?: MultiVals<GroupUser>;
}
