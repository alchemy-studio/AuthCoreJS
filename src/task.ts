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

export enum TaskTypes {
  NOOP = 'NOOP',
  UPLOAD_PICTURE = 'UPLOAD_PICTURE',
  CONVERT_AUDIO_FILE = 'CONVERT_AUDIO_FILE',
  AI_SCORE = 'AI_SCORE',
  WATERMARK = 'WATERMARK',
  VIDEO_COMPRESSION = 'VIDEO_COMPRESSION',
  AUDIO_FILE_AI_SCORE = 'AUDIO_FILE_AI_SCORE',
}

export interface TaskMeta {
  media_id?: string;
  data?: KVPair;
}

export interface CommonTask {
  task_id?: string;
  task_type: TaskTypes | string;
  task_result?: KVPair;
  task_status?: TaskStatuses | string;
  task_meta?: TaskMeta;
  created_at?: string | Date;
  task_from?: TaskFrom;
  payload?: { payload?: string } | unknown;
}
