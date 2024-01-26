import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpRequest, Request, Response } from '../types/http-request';

export class HttpClient implements HttpRequest {
   private readonly instance: AxiosInstance;
   constructor() {
      this.instance = axios.create({
         baseURL:
            import.meta.env.VITE_BASE_API_URL || 'http://localhost:3000/api/',
         timeout: 10000,
         headers: {
            'Content-Type': 'application/json'
         }
      });
      this.setupInterceptors();
   }

   async requestHandler(
      url: string,
      method: string,
      config: Request
   ): Promise<Response> {
      return await this.instance.request({
         url,
         method,
         ...config
      });
   }

   async get<T = any>(url: string, config: Request): Promise<AxiosResponse<T>> {
      return await this.requestHandler(url, 'get', config);
   }

   async post<T = any>(
      url: string,
      config: Request
   ): Promise<AxiosResponse<T>> {
      return await this.requestHandler(url, 'post', config);
   }

   async put<T = any>(url: string, config: Request): Promise<AxiosResponse<T>> {
      return await this.requestHandler(url, 'put', config);
   }

   async delete<T = any>(
      url: string,
      config: Request
   ): Promise<AxiosResponse<T>> {
      return await this.requestHandler(url, 'delete', config);
   }

   private setupInterceptors(): void {
      this.instance.interceptors.request.use(
         (config) => {
            return config;
         },
         (error) => {
            return Promise.reject(error);
         }
      );
      this.instance.interceptors.response.use(
         (response) => response,
         (error: AxiosError) => {
            if (error.status === 404) {
               return Promise.reject(error.message);
            }
            return Promise.reject(error);
         }
      );
   }
}
