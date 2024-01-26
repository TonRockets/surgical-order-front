import { useForm } from 'react-hook-form';

import TextField from '../molecules/forms/TextField';
import { SurgicalRequestData } from '@/types/surgical-request-data';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { surgicalContext } from '@/contexts/SurgicalRequestContext';
import { Button } from '../atoms/buttons/Button';

type EditationFormProps = {
   content: SurgicalRequestData;
   handleDate: (date: string) => string;
};

const EditationForm: FC<EditationFormProps> = ({ content, handleDate }) => {
   const navigate = useNavigate();
   const { editSurgicalRequest } = useContext(surgicalContext);
   const { register, handleSubmit } = useForm<SurgicalRequestData>();
   const [editedData, setEditedData] = useState<SurgicalRequestData>(content);

   const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const onSubmitEdited = async () => {
      await editSurgicalRequest(editedData);
      navigate('/');
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmitEdited)}>
            <TextField
               required
               name="hospital"
               register={register}
               inputProps={{
                  value: content.hospital,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="room"
               register={register}
               inputProps={{
                  value: content.room,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="doctor"
               register={register}
               inputProps={{
                  value: content.doctor,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="patient"
               register={register}
               inputProps={{
                  value: content.patient,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="procedures"
               register={register}
               inputProps={{
                  value: content.procedures,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="surgeryDate"
               register={register}
               inputProps={{
                  value: handleDate(content.surgeryDate),
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <TextField
               required
               name="generalObservations"
               register={register}
               inputProps={{
                  value: content.generalObservations,
                  onChange: (e) => onHandleChange(e)
               }}
            />
            <Button type="submit" variant="primary">
               Save
            </Button>
         </form>
      </>
   );
};

export default EditationForm;
