export type ApiResponse<T> = Promise<{
  data: T;
  error?: {
    message: string;
    action?: string;
    error?: any;
  };
  message?: string;
}>;
