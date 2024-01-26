import React, { createContext, useState } from 'react';
import { SurgicalRequestData } from '../types/surgical-request-data';
import { makeSurgicalRequestService } from '@/configs/factories/surgical-request';
import { ContextProps, SurgicalContextProps } from '@/types/surgical-context';

const surgicalContext = createContext<ContextProps>({
   surgicalRequestData: null,
   setSurgicalRequestData: () => null,
   loadSurgicalRequestData: async () => {},
   createSurgicalRequest: async () => {},
   deleteSurgicalRequest: async () => {},
   editSurgicalRequest: async () => {}
});

const SurgicalProvider: React.FC<SurgicalContextProps> = ({ children }) => {
   const [surgicalData, setSurgicalData] = useState<SurgicalRequestData[]>([]);
   const surgicalRequestService = makeSurgicalRequestService();

   const loadSurgicalRequestData = async () => {
      const {
         data: { body, statusCode }
      } = await surgicalRequestService.loadSurgicalData();
      if (statusCode !== 200) {
         // TODO: implement error handling with a toast
         return;
      }

      setSurgicalData(body);
   };

   const createSurgicalRequest = async (data: SurgicalRequestData) => {
      try {
         await surgicalRequestService.createSurgicalRequest({ data });
      } catch (error) {
         // TODO: implement error handling
         console.error(error);
      }
   };

   const deleteSurgicalRequest = async (id?: number) => {
      try {
         await surgicalRequestService.deleteSurgicalRequest(id!);
         await loadSurgicalRequestData();
      } catch (error) {
         console.error(error);
      }
   };

   const editSurgicalRequest = async (data: SurgicalRequestData) => {
      try {
         await surgicalRequestService.editSurgicalRequest(data.id!, { data });
         setSurgicalData((prevData) => ({
            ...prevData,
            ...data
         }));
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <surgicalContext.Provider
         value={{
            surgicalRequestData: surgicalData,
            setSurgicalRequestData: setSurgicalData,
            createSurgicalRequest,
            loadSurgicalRequestData,
            deleteSurgicalRequest,
            editSurgicalRequest
         }}
      >
         {children}
      </surgicalContext.Provider>
   );
};

export { surgicalContext, SurgicalProvider };
