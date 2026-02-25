/**
 * Aligned with AuthCore htycommons: CommonMeta, SingleVal, MultiVals; shared query types
 */

export interface KVPair {
  [key: string]: string | undefined;
}

export interface CommonMeta {
  meta: KVPair;
}

export interface MultiVals<T> {
  vals: T[];
}

export interface SingleVal<T> {
  val: T;
}

export interface QueryParam {
  page: number;
  page_size: number;
  keyword?: string;
}

export interface PagedQueryParam {
  page: number;
  page_size: number;
}

export interface HtyStyle {
  backgroundColor?: string;
}
