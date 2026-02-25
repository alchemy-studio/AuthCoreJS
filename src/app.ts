/**
 * Aligned with AuthCore htyuc_models: HtyApp, HtyGongGao, AppFromTo
 */

import type { HtyStates } from './role';
import type { HtyRole } from './role';
import type { HtyTag } from './tag';

export interface HtyGonggao {
  id: string;
  app_id?: string;
  app_desc?: string;
  created_at: string | Date;
  gonggao_status: string;
  content: string;
}

export interface HtyApp {
  app_id?: string;
  wx_id?: string;
  wx_secret?: string;
  domain: string;
  app_desc?: string;
  app_status: HtyStates | string;
  pubkey?: string;
  privkey?: string;
  tags?: HtyTag[];
  roles?: HtyRole[];
  role_ids?: HtyRole[];
  gonggaos?: HtyGonggao[];
  is_wx_app?: boolean;
}

export interface AppFromTo {
  id?: string;
  from_app_id: string;
  from_app?: HtyApp;
  to_app_id: string;
  to_app?: HtyApp;
  is_enabled: boolean;
}

export interface GroupedAppFromTo {
  from_app_id: string;
  from_app?: HtyApp;
  to_apps: {
    id: string;
    to_app_id: string;
    to_app?: HtyApp;
    is_enabled: boolean;
  }[];
}
