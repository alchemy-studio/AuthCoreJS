/**
 * Aligned with AuthCore/TS common task types shared by both frontends (no business-specific extensions)
 */

import type { KVPair } from './common';

export enum TaskFrom {
  TaskServer = 'TS',
  AI = 'AI',
}

export enum TaskStatuses {
  NOOP = 'NOOP',
  DONE = 'DONE',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  FAILED = 'FAILED',
  UNKNOWN = 'UNKNOWN',
}

export interface TaskMeta {
  media_id?: string;
  data?: KVPair;
}

export interface CommonTask {
  task_id?: string;
  task_type: string;
  task_result?: KVPair;
  task_status?: TaskStatuses | string;
  task_meta?: TaskMeta;
  created_at?: string | Date;
  task_from?: TaskFrom;
  payload?: { payload?: string } | unknown;
}
