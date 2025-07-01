import React, { useState } from 'react';
import './index.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddNote = ({ onOpenModal }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
            <div>
                <div className="flex flex-row items-center gap-2 mb-2">
                    <AddCircleOutlineIcon className="text-blue-600" fontSize="large" />
                    <span className="text-2xl font-bold text-slate-800">Añadir Nota</span>
                </div>
                <div className="text-center text-slate-600 mb-6">
                    Añade una nota sobre recaudos, incidencias o mantenimientos para llevar un mejor control y seguimiento.
                </div>
            </div>
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors mt-auto"
                onClick={onOpenModal}
            >
                Nueva Nota
            </button>
        </div>
    );
};

export default AddNote;