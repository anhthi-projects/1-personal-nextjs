export interface ExceptionMessage {
  fields: [string];
  payload: any;
  details: Record<string, any>;
}

export interface AppException {
  path: string;
  message: ExceptionMessage | string;
  statusCode?: number;
  statusTitle?: string;
}
