/**
 * Aligned with AuthCore htyuc_models: HtyTongzhi, CommonTongzhiContent; NotifyTypes used by both frontends
 */

export interface TongzhiContent {
  to_user: string;
  from_user: string;
  created_at: Date | string;
  content: string;
  jihua_id?: string;
  jihua_start_from?: Date | string;
  jihua_end_at?: Date | string;
  piyue_id?: string;
  lianxi_id?: string;
  daka_id?: string;
  daka_start_date?: Date | string;
  daka_duration_days?: number;
  qumu_sections?: string[];
}

export enum TongzhiStatuses {
  Unread = 'Unread',
  Read = 'Read',
}

export type TongzhiQueryParam = {
  page?: number;
  page_size?: number;
  tongzhi_status?: TongzhiStatuses;
  role_id?: string;
  hty_id?: string;
  user_id?: string;
};

export enum NotifyTypes {
  TeacherRegister = 'teacher_register',
  StudentRegister = 'student_register',
  RejectRegister = 'reject_register',
  StudentRegisterApproved = 'student_register_success',
  TeacherRegisterApproved = 'teacher_register_success',
  TeacherCommentPiyue = 'teacher_comment_piyue',
  StudentCommentPiyue = 'student_comment_piyue',
  JihuaCreate = 'create_jihua',
  JihuaUpdate = 'update_jihua',
  JihuaDelete = 'delete_jihua',
  LianxiCreate = 'create_lianxi',
  LianxiDelete = 'delete_lianxi',
  PiyueCreate = 'create_piyue',
  TeacherCommentJihua = 'teacher_comment_jihua',
  StudentCommentJihua = 'student_comment_jihua',
  TeacherCommentDaka = 'teacher_comment_daka',
  StudentCommentDaka = 'student_comment_daka',
  DakaCreate = 'create_daka',
  DakaUpdate = 'update_daka',
  DakaDelete = 'delete_daka',
  ResourceNoteGroupCreate = 'create_resource_note_group',
  KechengCreateOrUpdate = 'create_or_update_kecheng',
  KechengDelete = 'delete_kecheng',
  TeacherCommentKecheng = 'teacher_comment_kecheng',
}

export interface NotifyParam {
  hty_id: string;
  hty_id2?: string;
  notify_type: NotifyTypes;
  jihua_id?: string;
  daka_id?: string;
  piyue_id?: string;
  lianxi_id?: string;
  comment_id?: string;
  comment_time?: string;
  comment_msg?: string;
  serial?: string;
  to_role_id?: string;
  resource_note_group_id?: string;
  ref_id?: string;
  ref_type?: string;
  qumu_name?: string;
  qumu_section_name?: string;
  first?: string;
  remark?: string;
  kecheng_id?: string;
  kecheng_name?: string;
  student_name?: string;
  teacher_name?: string;
  start_from?: string;
  end_by?: string;
  from_app_id?: string;
}

export interface Tongzhi {
  tongzhi_id: string;
  app_id: string;
  tongzhi_type: NotifyTypes | string;
  tongzhi_status: TongzhiStatuses;
  send_from: string;
  send_to: string;
  created_at: Date | string;
  content: TongzhiContent;
  meta: { val: string };
  push_info?: unknown;
}
