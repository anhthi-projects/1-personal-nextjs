export enum PrismaErrorCode {
  DUPLICATED = "P2002",
}

export enum ValidationErrorCode {
  MIN_LENGTH = "minLength",
  MAX_LENGTH = "maxLength",
}

export enum HttpErrorCode {
  FORBIDDEN = "403",
}

/**
 * AppException
 */

export interface ExceptionMessageDetails {
  code: keyof typeof PrismaErrorCode &
    keyof typeof ValidationErrorCode &
    keyof typeof HttpErrorCode;
  description: string;
}

export interface ExceptionMessage {
  details: ExceptionMessageDetails;
  fieldName?: string;
  payload?: any;
}

export interface AppException {
  url: string;
  message: ExceptionMessage[];
  statusCode?: number;
  statusTitle?: string;
}
