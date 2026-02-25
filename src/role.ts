/**
 * Aligned with AuthCore htyuc_models / htycommons: HtyRole, HtyAction, HtyLabel; role_key enums
 */

import type { HtyStyle } from './common';
import type { HtyTag, HtyTagRef } from './tag';

export { type HtyStyle } from './common';

export enum HtyStates {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
}

export enum HtyBaseRoles {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  GUEST = 'GUEST',
}

export enum HtySuperRoles {
  ADMIN = 'ADMIN',
  ROOT = 'ROOT',
  TESTER = 'TESTER',
  SUPERVISOR = 'SUPERVISOR',
}

export type HtyRoles = HtyBaseRoles | HtySuperRoles | string;

export interface HtyRole {
  hty_role_id: string;
  user_app_info_id?: string;
  app_ids?: string[];
  role_key: string;
  role_name: string;
  role_desc: string;
  role_status: HtyStates | string;
  labels?: HtyLabel[];
  actions?: HtyAction[];
  style?: string;
  styleObj?: HtyStyle;
  tag_refs?: HtyTagRef[];
}


export interface HtyAction {
  hty_action_id: string;
  action_name: string;
  action_desc?: string;
  action_status: HtyStates | string;
  roles?: HtyRole[];
  labels?: HtyLabel[];
  tags?: HtyTag[];
}

export interface HtyLabel {
  hty_label_id: string;
  label_name: string;
  label_desc?: string;
  label_status: HtyStates | string;
  actions?: HtyAction[];
  roles?: HtyRole[];
  style?: string;
  styleObj?: HtyStyle;
  tags?: HtyTag[];
}
