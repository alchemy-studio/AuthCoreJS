/**
 * Aligned with AuthCore htyuc_models: HtyTongzhi, CommonTongzhiContent.
 * Notify types / domain payload keys live in application repos; flat JSON maps to Rust PushInfo (envelope + extra).
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
  clazz_id?: string;
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

export interface NotifyParam {
  hty_id: string;
  hty_id2?: string;
  /** Logical channel id (string union enforced in each app via local enum if desired). */
  notify_type: string;
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
  clazz_id?: string;
  clazz_name?: string;
  student_name?: string;
  teacher_name?: string;
  start_from?: string;
  end_by?: string;
  from_app_id?: string;
}

export interface Tongzhi {
  tongzhi_id: string;
  app_id: string;
  tongzhi_type: string;
  tongzhi_status: TongzhiStatuses;
  send_from: string;
  send_to: string;
  created_at: Date | string;
  content: TongzhiContent;
  meta: { val: string };
  push_info?: unknown;
}
