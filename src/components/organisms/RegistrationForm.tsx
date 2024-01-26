import { FC } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../atoms/buttons/Button';
import TextField from '@/components/molecules/forms/TextField';
import { SurgicalRequestData } from '@/types/surgical-request-data';

export const Form = styled.form`
   display: grid;
   margin: 16px auto;
   width: 60%;

   @media (max-width: 600px) {
      width: 80%;

      button {
         margin: 16px 0;
      }
   }
`;

const schema = yup.object().shape({
   room: yup.string().required(),
   doctor: yup.string().required(),
   patient: yup.string().required(),
   hospital: yup.string().required(),
   procedures: yup.string().required(),
   surgeryDate: yup.string().required(),
   generalObservations: yup.string().required()
});

interface RegistrationFormProps {
   onSubmit: SubmitHandler<SurgicalRequestData>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<SurgicalRequestData>({
      resolver: yupResolver(schema)
   });

   return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <TextField
            required
            name="room"
            label="Room:"
            register={register}
            error={errors.room?.message}
            inputProps={{ placeholder: "Enter Room name, i.e., 'Room-name'" }}
         />
         <TextField
            required
            name="doctor"
            label="Doctor:"
            register={register}
            error={errors.doctor?.message}
            inputProps={{ placeholder: "Enter doctor name, i.e., 'Welli'" }}
         />
         <TextField
            required
            name="patient"
            label="Patient:"
            register={register}
            error={errors.patient?.message}
            inputProps={{ placeholder: "Enter patient name, i.e., 'Ton'" }}
         />
         <TextField
            required
            name="hospital"
            label="Hospital:"
            register={register}
            error={errors.hospital?.message}
            inputProps={{
               placeholder: "Enter hospital name, i.e., 'Hospital city'"
            }}
         />
         <TextField
            required
            name="procedures"
            label="Procedures:"
            register={register}
            error={errors.procedures?.message}
            inputProps={{
               placeholder: "Enter procedure name, i.e., 'Appendicitis'"
            }}
         />
         <TextField
            required
            name="surgeryDate"
            label="Surgery Date:"
            register={register}
            inputProps={{ type: 'date' }}
            error={errors.surgeryDate?.message}
         />
         <TextField
            required
            name="generalObservations"
            label="General Observations:"
            register={register}
            error={errors.generalObservations?.message}
            inputProps={{
               placeholder: "Enter observation, i.e., 'Some bservations"
            }}
         />
         <Button type="submit" variant="primary">
            Save
         </Button>
      </Form>
   );
};

export default RegistrationForm;
