/**
 * Aligned with AuthCore htycommons/src/common.rs: HtyResponse, HtyErr, HtyErrCode
 */

export interface HtyResponse<T> {
  r: boolean;
  d?: T | null;
  e?: string | null;
  hty_err?: HtyErr | null;
}

export interface HtyErr {
  code: HtyErrCode;
  reason?: string | null;
}

export enum HtyErrCode {
  DbErr = 'DbErr',
  InternalErr = 'InternalErr',
  CommonError = 'CommonError',
  WebErr = 'WebErr',
  JwtErr = 'JwtErr',
  WxErr = 'WxErr',
  NullErr = 'NullErr',
  NotFoundErr = 'NotFoundErr',
  NotEqualErr = 'NotEqualErr',
  AuthenticationFailed = 'AuthenticationFailed',
  ConflictErr = 'ConflictErr',
  TypeErr = 'TypeErr',
  DuplicateErr = 'DuplicateErr',
}
