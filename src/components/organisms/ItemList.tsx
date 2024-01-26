import styled from 'styled-components';
import TextRow from '@/components/molecules/lists/TextRow';
import { SurgicalRequestData } from '@/types/surgical-request-data';

interface ItemListProps {
   title: string;
   data: SurgicalRequestData[] | null;
}

const ItemListWrapper = styled.div`
   display: grid;
   border: 1px solid #ddd;
   border-radius: 8px;
   margin: 16px auto;
   padding: 16px;
   width: 60%;

   @media (max-width: 600px) {
      width: 80%;
   }
`;

const Title = styled.h2`
   color: #dee4e7;
   text-align: center;
`;

const ItemList: React.FC<ItemListProps> = ({ title, data }) => {
   return (
      <ItemListWrapper>
         <Title>{title}</Title>
         <TextRow data={data} />
      </ItemListWrapper>
   );
};

export default ItemList;
