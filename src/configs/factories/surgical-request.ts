import { SugicalRequestService } from '@/services/surgical-request.service';
import { HttpClient } from '../http';

export const makeSurgicalRequestService = (): SugicalRequestService => {
   const httpClient = new HttpClient();
   return new SugicalRequestService(httpClient);
};
