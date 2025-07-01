import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/notesSlices';
import './index.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RoomIcon from '@mui/icons-material/Room';

const recordTypeOptions = [
    { value: 'Collection', label: 'Collection' },
    { value: 'Incident', label: 'Incident' },
    { value: 'Maintenance', label: 'Maintenance' },
];

const ModalAddNote = ({ onClose }) => {
    const dispatch = useDispatch();
    const initialValues = {
        recordType: '',
        title: '',
        route: '',
        amount: '',
        description: ''
    };
    const validationLogic = Yup.object({
        recordType: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        route: Yup.string().required('Required'),
        amount: Yup.number().typeError('Must be a number').positive('Must be positive').required('Required'),
        description: Yup.string().required('Required'),
    });
    return (
        <div className="modal-add-note-container w-full max-w-3xl md:max-w-4xl mx-auto bg-white rounded-lg  p-8 relative">
            <Box display="flex" justifyContent="flex-end" className="absolute top-2 right-2 z-10">
                <IconButton onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema={validationLogic}
                onSubmit={(values, { resetForm }) => {
                    dispatch(addNote(values));
                    resetForm();
                    if (onClose) onClose();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleReset, isSubmitting }) => (
                    <Form className="flex flex-col gap-4">
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="record-type-label">Record type</InputLabel>
                            <Select
                                labelId="record-type-label"
                                id="recordType"
                                name="recordType"
                                value={values.recordType}
                                label="Record type"
                                onChange={handleChange}
                                error={touched.recordType && Boolean(errors.recordType)}
                            >
                                {recordTypeOptions.map(opt => (
                                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.title && Boolean(errors.title)}
                            helperText={touched.title && errors.title}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Route"
                            name="route"
                            value={values.route}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.route && Boolean(errors.route)}
                            helperText={touched.route && errors.route}
                            InputProps={{
                                startAdornment: <RoomIcon className="text-gray-400 mr-2" />,
                            }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Amount"
                            name="amount"
                            type="number"
                            value={values.amount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.amount && Boolean(errors.amount)}
                            helperText={touched.amount && errors.amount}
                            InputProps={{
                                startAdornment: <AttachMoneyIcon className="text-gray-400 mr-2" />,
                            }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            multiline
                            minRows={3}
                        />
                        <Box display="flex" justifyContent="space-between" marginTop={2}>
                            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                Complete
                            </Button>
                            <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
                                Clear
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ModalAddNote;