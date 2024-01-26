import { useEffect, useState } from 'react';
import { HeaderContainer, Logo, Menu, MenuItem } from '@styles/header';
import { Button, BurgerButton } from './atoms/buttons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const [isNavVisible, setIsNavVisible] = useState(false);
   const [isSmallScreen, setIsSmallScreen] = useState(false);
   const navigate = useNavigate();

   const handleMediaQueryChange = (mediaQuery: any) => {
      if (mediaQuery.matches) {
         setIsSmallScreen(true);
      } else {
         setIsSmallScreen(false);
      }
   };

   const goToList = () => {
      setIsNavVisible(!isNavVisible);
      navigate('/list');
   };

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
   }, []);

   return (
      <HeaderContainer>
         <Logo src="https://a3data.com.br/wp-content/uploads/2023/09/Logo-A3Data.png" />
         {(!isSmallScreen || isNavVisible) && (
            <Menu>
               <MenuItem href="/">Home</MenuItem>
               <MenuItem href="#">About</MenuItem>
               <MenuItem href="#">Contact</MenuItem>
               <Button variant="primary" onClick={goToList}>
                  View List
               </Button>
            </Menu>
         )}
         <BurgerButton
            isNavVisible={isNavVisible}
            setIsNavVisible={setIsNavVisible}
         />
      </HeaderContainer>
   );
};

export default Header;
