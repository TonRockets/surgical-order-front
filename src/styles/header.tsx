import styled from 'styled-components';

export const HeaderContainer = styled.header`
   display: grid;
   grid-template-areas: 'logo nav';
   justify-content: space-between;
   align-items: center;
   background-color: #333;
   color: white;
   padding: 1rem;
   text-align: center;

   @media (max-width: 600px) {
      padding: 0.5rem;
      grid-template-areas: 'logo burger' 'nav nav';
   }
`;

export const Menu = styled.nav`
   margin-top: 1rem;
   display: grid;
   grid-area: nav;
   grid-template-columns: repeat(4, auto);
   align-items: center;
   justify-items: center;

   @media (max-width: 600px) {
      grid-template-rows: repeat(4, auto);
      grid-template-columns: none;
      grid-row-gap: 20px;
   }
`;

export const Logo = styled.img`
   width: 100px;
   height: auto;
   padding: 6px;
   border-radius: 6px;
   background-color: #dee4e7;

   @media (max-width: 600px) {
      width: 80px;
   }
`;

export const MenuItem = styled.a`
   color: white;
   margin: 0 1rem;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }

   @media (max-width: 600px) {
      margin: 0 0.5rem;
   }
`;
