/**
 * Frontend auth helpers aligned with AuthCore UC: UnauthorizedError, HtyVerified
 */

export enum UnauthorizedError {
  AuthorizationErr = 'AuthorizationErr',
  HtySudoerTokenErr = 'HtySudoerTokenErr',
  InternalErr = 'InternalErr',
}

export interface HtyVerified {
  hty_id: string;
  validate: boolean;
}
