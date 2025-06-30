import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/notesSlices';
import './index.css';


const ModalAddNote = () => {
    const [age, setAge] = useState('')
    const dispatch = useDispatch()
    const validationLogic = Yup.object ({name:Yup.string().required(), registredType:Yup.string().required(), number:Yup.number().required()})
    const initialValues = {name:"",registredType: "", number:0}
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (

        <div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationLogic}
                    onSubmit={(values) => {
                        console.log('Valores enviados:', values);
                        dispatch(addNote("text"))
                    }}>
                    {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                        <Form>                           
                            <TextField error={touched.name && Boolean(errors.name)} onChange={handleChange} value={values. nname}  name='name'/>
                            <TextField error={touched.number && Boolean(errors.number)} onChange={handleChange} value={values.number} type="number"  name='number'/> 

                          
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Thoughts</InputLabel>
                                <Select
                                        error={touched.registredType && Boolean(errors.registredType)}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.registredType}
                                        label="Thoughts"
                                        onChange={handleChange}
                                        name="registredType"
                                    >
                                    <MenuItem value={""}>Thins to do</MenuItem>
                                    <MenuItem value={""}>Deams</MenuItem>
                                    <MenuItem value={""}>Nightmares</MenuItem>
                                </Select>
                            </FormControl>
                            <Button type='submit' disabled={isSubmitting}>Send</Button>  
                        </Form>)}
                </Formik>
            </div>
        </div>
    );
};

export default ModalAddNote;