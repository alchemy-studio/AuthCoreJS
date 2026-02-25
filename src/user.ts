/**
 * Aligned with AuthCore htyuc_models: HtyUser, UserAppInfo (HtyUserApp), UserSetting,
 * MetaUserAppInfo (WeixinUserInfo), TeacherInfo, StudentInfo, UserInfoRole, ReqRegister (HtyApplyUser)
 */

import type { MultiVals } from './common';
import type { HtyApp } from './app';
import type { HtyRole } from './role';
import type { HtyTag, HtyTagRef } from './tag';

export interface WeixinUserInfo {
  nickName: string;
  avatarUrl: string;
  gender?: number;
  city?: string;
  province?: string;
  country?: string;
  language?: string;
  father_job?: string;
  mother_job?: string;
}

export interface TeacherInfo {
  academic?: string;
  experience?: string;
  graduated_from?: string;
  subjects?: string[];
}

export interface StudentInfo {
  experience?: string;
}

export interface HtyUserSetting {
  k: string;
  v: string;
  role_key: string;
  app_id?: string;
}

export interface HtyUserInfoRole {
  the_id?: string;
  user_info_id?: string;
  role_id?: string;
}

export interface HtyUser {
  hty_id: string;
  union_id: string | null;
  enabled: boolean;
  created_at?: string | null;
  real_name: string;
  sex?: number | string | null;
  mobile?: string | null;
  age?: number;
  settings?: MultiVals<HtyUserSetting> | null;
  infos?: HtyUserApp[];
  info_roles?: HtyUserInfoRole[];
  tags?: HtyTag[];
}

export interface HtyUserApp {
  id: string;
  hty_id: string;
  app_id: string;
  openid?: string | null;
  is_registered: boolean;
  username: string;
  password: string;
  meta?: WeixinUserInfo | null;
  created_at?: string | null;
  teacher_info?: TeacherInfo | null;
  student_info?: StudentInfo | null;
  reject_reason?: string | null;
  needs_refresh?: boolean | null;
  avatar_url?: string | null;
  roles?: HtyRole[];
  role_ids?: string[];
  app?: HtyApp;
  tag_refs?: HtyTagRef[];
  unread_tongzhi_count?: number;
}

export interface HtyApplyUser {
  unionid: string;
  openid: string;
  real_name: string;
  sex: number;
  mobile?: string;
  role: string;
  meta: WeixinUserInfo;
  teacher_info?: { academic?: string; experience?: string };
  student_info?: { experience?: string };
  teacher_id?: string;
  enabled?: boolean;
}

export enum TeacherStudentStates {
  Waiting = 'Waiting',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Removed = 'Removed',
}

export interface TeacherStudent {
  id?: string;
  teacher_id: string;
  teacher?: HtyUser;
  student_id: string;
  student?: HtyUser;
  created_at?: Date | string;
  status?: TeacherStudentStates;
}
