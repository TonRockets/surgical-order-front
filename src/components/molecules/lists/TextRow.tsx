import { FC, useContext, useState } from 'react';

import { SurgicalRequestData } from '@/types/surgical-request-data';
import RowItem from './RowItem';
import styled from 'styled-components';
import { surgicalContext } from '@/contexts/SurgicalRequestContext';

const Row = styled.ul`
   list-style-type: none;
   margin-bottom: 16px;
   padding: 0;
`;

const RowGap = styled.div`
   border: none;
   padding: 20px 0;
`;

export const Actions = styled.div<ActionsProps>`
   display: flex;
   justify-content: flex-end;

   ${({ isEdit }) =>
      isEdit
         ? `
                #edit{
                    margin-left: 15px;
                    text-decoration: none;
                    cursor: pointer;
                }

                #delete {
                    display: none;
                }
            `
         : `
                #edit, #delete {
                    position: relative;
                    top: 25px;
                    margin-left: 15px;
                    text-decoration: none;
                    cursor: pointer;    
                }
            `};
`;

type TextRowProps = {
   data: SurgicalRequestData[] | null;
};

type ActionsProps = {
   isEdit: boolean;
};

const TextRow: FC<TextRowProps> = ({ data }) => {
   const [isEdit, setIsEdit] = useState(false);
   const [itemId, setItemId] = useState<number | undefined>(0);
   const { deleteSurgicalRequest } = useContext(surgicalContext);

   const handleDelete = async (id?: number) => {
      await deleteSurgicalRequest(id);
   };

   const handleUpdate = async (id?: number) => {
      setIsEdit(!isEdit);
      setItemId(id);
   };

   return (
      <Row>
         {data?.map((item) => (
            <>
               <Actions isEdit={isEdit}>
                  <span id="edit" onClick={() => handleUpdate(item.id)}>
                     &#128397;
                  </span>
                  <span id="delete" onClick={() => handleDelete(item.id)}>
                     &#10060;
                  </span>
               </Actions>
               <RowItem
                  key={item.id}
                  content={item}
                  isEdit={isEdit}
                  itemId={itemId}
               />
               <RowGap />
            </>
         ))}
      </Row>
   );
};

export default TextRow;
