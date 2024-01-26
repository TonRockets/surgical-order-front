import { useContext, useEffect } from 'react';

import { surgicalContext } from '@/contexts/SurgicalRequestContext';
import { SurgicalRequestData } from '@/types/surgical-request-data';
import RegistrationForm from '@/components/organisms/RegistrationForm';

const Home = () => {
   const { loadSurgicalRequestData, createSurgicalRequest } =
      useContext(surgicalContext);

   const onSubmit = async (data: SurgicalRequestData) => {
      await createSurgicalRequest(data);
   };

   useEffect(() => {
      loadSurgicalRequestData();
   }, []);

   return (
      <div>
         <RegistrationForm onSubmit={onSubmit} />
      </div>
   );
};

export default Home;
