/**
 * Aligned with AuthCore htyuc_models: HtyTemplate, HtyTemplateData
 */

export interface WxMsgTemplate {
  first: { value: string };
  keyword1: { value: string };
  keyword2: { value: string };
  keyword3: { value: string };
  remark: { value: string };
}

export interface HtyTemplateData {
  id: string;
  app_id: string;
  app_desc?: string;
  template_id: string;
  template_val: string;
  template_text: { val: string };
  msg_data?: WxMsgTemplate;
  created_at?: Date | string;
  created_by?: string;
}

export interface HtyTemplate {
  id?: string;
  template_key?: string;
  created_at?: Date | string;
  created_by?: string;
  template_desc?: string;
  datas?: HtyTemplateData[];
}
