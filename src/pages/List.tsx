import { FC, useContext, useEffect } from 'react';
import { surgicalContext } from '@/contexts/SurgicalRequestContext';
import ItemList from '@/components/organisms/ItemList';

const List: FC = () => {
   const { surgicalRequestData } = useContext(surgicalContext);

   useEffect(() => {}, [surgicalRequestData]);

   return (
      <>
         <ItemList data={surgicalRequestData} title="Surgical Requests" />
      </>
   );
};

export default List;
