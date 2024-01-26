import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export const SButton = styled.button<ButtonProps>`
   border-radius: 8px;
   border: 1px solid transparent;
   padding: 0.6em 1.2em;
   font-size: 1em;
   font-weight: 500;
   font-family: inherit;
   background-color: ${({ variant }: ButtonProps) =>
      variant === 'primary' ? '#1a1a1a;' : 'white'};
   cursor: pointer;
   transition: border-color 0.25s;

   :hover {
      border-color: #646cff;
   }
   :focus,
   :focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
   }

   ${({ burgerMenu }) =>
      burgerMenu &&
      `display: none;
    
    @media (max-width: 600px) {
        display: block;
    }`}
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'primary' | 'secondary';
   burgerMenu?: boolean;
}

export const Button: FC<ButtonProps> = ({
   children,
   variant,
   burgerMenu,
   ...rest
}) => {
   return (
      <SButton burgerMenu={burgerMenu} variant={variant} {...rest}>
         {children}
      </SButton>
   );
};
