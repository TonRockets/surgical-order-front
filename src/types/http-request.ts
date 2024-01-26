export type Request = {
   headers?: Record<string, string>;
   data?: any;
   params?: any;
};

export type Response = {
   data: any;
   status: number;
   statusText: string;
   headers: Record<string, string>;
   config: any;
   request?: any;
};

export type HttpResponse = {
   data?: any;
};

export interface HttpRequest {
   requestHandler(
      url: string,
      method: string,
      config?: Request
   ): Promise<Response>;
}
