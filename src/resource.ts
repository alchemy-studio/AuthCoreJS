/**
 * Aligned with AuthCore htyuc_models: HtyResource
 */

import type { MultiVals } from './common';
import type { CommonTask } from './task';

export interface HtyResource {
  filename?: string;
  app_id: string;
  hty_resource_id: string;
  created_at: Date | string;
  url: string;
  res_type: string;
  created_by: string;
  task_id?: string;
  tasks?: MultiVals<CommonTask>;
  compress_processed?: boolean;
  updated_at?: Date | string;
  updated_by?: string;
}
