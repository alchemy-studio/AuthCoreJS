/**
 * UC / htyuc_models 对齐的轻量 DTO：无业务枚举、无通知正文字段表。
 * 扁平 Json 与 Rust PushInfo（信封 + serde flatten extra）一致。
 */

/** 通知请求体：固定信封字段 + 任意扁平键（服务端落入 PushInfo.extra） */
export interface NotifyParamEnvelope {
  hty_id: string;
  hty_id2?: string;
  notify_type: string;
  comment_id?: string;
  comment_time?: string;
  comment_msg?: string;
  serial?: string;
  to_role_id?: string;
  ref_id?: string;
  ref_type?: string;
  from_app_id?: string;
}

export type NotifyParam = NotifyParamEnvelope &
  Record<string, string | number | boolean | undefined | null>;

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

/** 列表/详情 DTO；content、push_info 由业务仓库收窄类型 */
export interface Tongzhi {
  tongzhi_id: string;
  app_id: string;
  tongzhi_type: string;
  tongzhi_status: TongzhiStatuses;
  send_from: string;
  send_to: string;
  created_at: Date | string;
  content: Record<string, unknown>;
  meta: { val: string };
  push_info?: Record<string, unknown>;
}
