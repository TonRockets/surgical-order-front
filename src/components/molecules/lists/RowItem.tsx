import styled from 'styled-components';

import { SurgicalRequestData } from '@/types/surgical-request-data';
import EditationForm from '../../organisms/EditationForm';

interface RowItemProps {
   content: SurgicalRequestData;
   itemId?: number;
   isEdit: boolean;
}

const ItemWrapper = styled.li`
   padding: 3px;
   border-bottom: 1px solid #ddd;
`;

const RowItem: React.FC<RowItemProps> = ({ content, isEdit, itemId }) => {
   const handleDate = (date: string) => new Date(date).toLocaleDateString();

   return (
      <>
         {isEdit && itemId === content.id ? (
            <>
               <EditationForm content={content} handleDate={handleDate} />
            </>
         ) : (
            <>
               <ItemWrapper>Surgical Code: {content.code}</ItemWrapper>
               <ItemWrapper>Hospital: {content.hospital}</ItemWrapper>
               <ItemWrapper>Room: {content.room}</ItemWrapper>
               <ItemWrapper>Doctor: {content.doctor}</ItemWrapper>
               <ItemWrapper>Patient: {content.patient}</ItemWrapper>
               <ItemWrapper>Procedures: {content.procedures}</ItemWrapper>
               <ItemWrapper>
                  Created: {handleDate(content.creationDate!)}
               </ItemWrapper>
               <ItemWrapper>
                  Surgery: {handleDate(content.surgeryDate)}
               </ItemWrapper>
               <ItemWrapper>
                  Observation: {content.generalObservations}
               </ItemWrapper>
            </>
         )}
      </>
   );
};

export default RowItem;
