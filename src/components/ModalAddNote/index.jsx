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
import InputAdornment from '@mui/material/InputAdornment';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import BuildIcon from '@mui/icons-material/Build';

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
                          <Box>
                            <h2 className="text-xl font-semibold mb-4">
                              Registra información sobre recaudos, incidencias o mantenimiento
                            </h2>
                            <FormControl fullWidth margin="normal">
                              <InputLabel id="record-type-label">Tipo de Registro</InputLabel>
                              <Select
                                labelId="record-type-label"
                                id="recordType"
                                name="recordType"
                                value={values.recordType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.recordType && Boolean(errors.recordType)}
                                label="Tipo de Registro"
                              >
                                <MenuItem value="">
                                  <em>Seleccione</em>
                                </MenuItem>
                                <MenuItem value="Collection">
                                  <AttachMoneyIcon fontSize="small" sx={{ mr: 1 }} /> Recaudo
                                </MenuItem>
                                <MenuItem value="Incident">
                                  <WarningAmberIcon fontSize="small" sx={{ mr: 1 }} /> Incidencia
                                </MenuItem>
                                <MenuItem value="Maintenance">
                                  <BuildIcon fontSize="small" sx={{ mr: 1 }} /> Mantenimiento
                                </MenuItem>
                              </Select>
                            </FormControl>
                            <TextField
                              fullWidth
                              margin="normal"
                              id="title"
                              name="title"
                              label="Título"
                              placeholder="Ej: Recaudo Ruta 15A"
                              value={values.title}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.title && Boolean(errors.title)}
                              helperText={touched.title && errors.title}
                            />
                            <TextField
                              fullWidth
                              margin="normal"
                              id="route"
                              name="route"
                              label="Ruta"
                              placeholder="Ej: Ruta 15A - Centro"
                              value={values.route}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.route && Boolean(errors.route)}
                              helperText={touched.route && errors.route}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <RoomIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <TextField
                              fullWidth
                              margin="normal"
                              id="amount"
                              name="amount"
                              label="Monto Recaudado"
                              placeholder="Ej: $50,000"
                              value={values.amount}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.amount && Boolean(errors.amount)}
                              helperText={touched.amount && errors.amount}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <TextField
                              fullWidth
                              margin="normal"
                              id="description"
                              name="description"
                              label="Descripción"
                              placeholder="Describe los detalles del registro..."
                              multiline
                              minRows={3}
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.description && Boolean(errors.description)}
                              helperText={touched.description && errors.description}
                            />
                            <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
                              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                Guardar Nota
                              </Button>
                              <Button variant="outlined" onClick={onClose}>
                                Cancelar
                              </Button>
                            </Box>
                          </Box>
                        </Form>)}
                </Formik>
            </div>
        </div>
    );
};

export default ModalAddNote;