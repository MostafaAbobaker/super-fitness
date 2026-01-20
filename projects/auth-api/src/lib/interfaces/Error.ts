export interface ErrorData {
  headers: {
    headers: {};
    normalizedNames: {};
    lazyUpdate: any;
  };
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: {
    error: string;
  };
}

export interface ErrorResponse {
  error: string;
  message: string;
  status: number;
}
