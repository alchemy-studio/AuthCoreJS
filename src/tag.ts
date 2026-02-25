/**
 * Aligned with AuthCore htycommons: HtyTag, HtyTagRef; ReqTagRefsByRefId response shape
 */

import type { CommonMeta, HtyStyle } from './common';

export interface HtyTag {
  tag_id: string;
  tag_name: string;
  tag_desc?: string;
  style?: string;
  styleObj?: HtyStyle;
}

export interface HtyTagRef {
  the_id: string;
  hty_tag_id: string;
  ref_id: string;
  ref_type: string;
  meta: CommonMeta | Record<string, unknown>;
  tag?: HtyTag;
}

export interface HtyTagRefsByRefId {
  ref_id: string;
  tag_refs: HtyTagRef[];
}
