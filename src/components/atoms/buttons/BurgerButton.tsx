import { Dispatch, FC, SetStateAction } from 'react';
import { Button } from './Button';

type BurgerButtonProps = {
   isNavVisible: boolean;
   setIsNavVisible: Dispatch<SetStateAction<boolean>>;
};

export const BurgerButton: FC<BurgerButtonProps> = ({
   isNavVisible,
   setIsNavVisible
}) => {
   const toggleNav = () => {
      setIsNavVisible(!isNavVisible);
   };

   return (
      <>
         <Button burgerMenu={true} variant="primary" onClick={toggleNav}>
            🍔
         </Button>
      </>
   );
};
