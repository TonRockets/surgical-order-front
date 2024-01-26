// import { FormValuesProps } from "@/types/form-values";
import { FormValuesProps } from '@/types/form-values';
import { SurgicalRequestData } from '@/types/surgical-request-data';
import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export const Input = styled.input<ErrorProps>`
   padding: 0.5rem;
   border-radius: 4px;
   border: none;
   outline: none;

   &:focus {
      box-shadow: 0 0 10px #dee4e7;
   }
`;

export const ErrorText = styled.p<ErrorProps>`
   color: ${({ error }) => (error ? '#FF4500' : '#37474F')};
   margin: 0;
`;

export const Label = styled.label`
   color: #dee4e7;
`;

type InputProps = {
   type?: string;
   value?: any;
   required?: boolean;
   placeholder?: string;
   handleChange?: any;
   label?: Path<FormValuesProps>;
   name: Path<SurgicalRequestData>;
   register: UseFormRegister<SurgicalRequestData>;
};

interface ErrorProps {
   error?: string;
}

const InputField: FC<InputProps & ErrorProps> = ({
   name,
   type,
   value,
   label,
   error,
   register,
   required,
   placeholder,
   handleChange
}) => {
   return (
      <>
         <Label>{label}</Label>
         <Input
            type={type}
            // value={value}
            placeholder={placeholder}
            {...register(name, {
               required,
               onChange: (e) => handleChange(e),
               value: value
            })}
         />
         {error && <ErrorText error={error}>{error}</ErrorText>}
      </>
   );
};

export default InputField;
