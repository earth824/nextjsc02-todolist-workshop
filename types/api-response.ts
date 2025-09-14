export enum ErrorCode {
  EMAIL_ALREADY_EXIST = 'EMAIL_ALREADY_EXIST',
  VALIDATION_FAILED = 'VALIDATION_FAILED'
}

export enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401
}

export type SuccessApiResponse<T = any> = {
  success: true;
  message?: string;
  data?: T;
};
export type ErrorApiResponse = {
  success: false;
  // statusCode: StatusCode
  message?: string;
  errorCode?: ErrorCode;
  details?: any;
};

export type ApiResponse = SuccessApiResponse | ErrorApiResponse;
