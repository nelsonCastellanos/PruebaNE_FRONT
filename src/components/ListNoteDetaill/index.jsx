import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import ItemNoteDetail from '../ItemNoteDetail';
import { deleteNote } from '../../features/notesSlices';
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ListNoteDetail = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState(null);

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setOpen(true);
    };
    const handleConfirmDelete = () => {
        dispatch(deleteNote(selectedId));
        setOpen(false);
        setSelectedId(null);
    };
    const handleCancel = () => {
        setOpen(false);
        setSelectedId(null);
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-xl shadow-lg p-4 min-h-[180px] flex flex-col gap-4">
                <div className="flex mb-2 justify-between items-center">
                    <Typography variant="h5">Notas</Typography>
                    <Typography variant="body2">Total: {notes.length}</Typography>
                </div>
                {notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-md shadow-inner py-8 mt-4">
                        <span className="text-gray-500 text-lg font-medium">No hay notas aún</span>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 max-h-[350px] overflow-y-auto">
                        {notes.map(note => (
                            <ItemNoteDetail key={note.id} note={note} onDelete={handleDeleteClick} />
                        ))}
                    </div>
                )}
            </div>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>¿Seguro que quieres eliminar esta nota?</DialogTitle>
                <DialogContent>
                    <Typography>Esta acción no se puede deshacer.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">Cancelar</Button>
                    <Button onClick={handleConfirmDelete} color="error">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ListNoteDetail;

