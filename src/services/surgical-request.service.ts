import { HttpClient } from '../configs/http';
import { HttpResponse, Request } from '../types/http-request';
import { SurgicalRequestData } from '../types/surgical-request-data';

export class SugicalRequestService {
   constructor(private readonly httpClient: HttpClient) {}

   async loadSurgicalData(): Promise<HttpResponse> {
      const result = await this.httpClient.get<SurgicalRequestData>(
         '/surgical-request',
         {}
      );
      return {
         data: result.data
      };
   }

   async createSurgicalRequest(config: Request): Promise<HttpResponse> {
      const result = await this.httpClient.post<SurgicalRequestData>(
         '/surgical-request',
         config
      );
      return {
         data: result.data
      };
   }

   async deleteSurgicalRequest(id: number): Promise<HttpResponse> {
      const result = await this.httpClient.delete<SurgicalRequestData>(
         `/surgical-request/${id}`,
         {}
      );
      return {
         data: result.data
      };
   }

   async editSurgicalRequest(
      id: number,
      config: Request
   ): Promise<HttpResponse> {
      const result = await this.httpClient.put<SurgicalRequestData>(
         `/surgical-request/${id}`,
         config
      );
      return {
         data: result.data
      };
   }
}
