import { createSlice } from '@reduxjs/toolkit';

let noteId = 1
const noteSlices = createSlice({
    name: 'notes', initialState: [], reducers: {
        addNote: (state, action) => {
            state.push({ id: noteId++, texto: action.payload });
        },
        deleteNote: (state, action) => {
            return state.filter((nota) => nota.id !== action.payload);

            
        },
    },
})

export const { addNote, deleteNote } = noteSlices.actions;
export default noteSlices.reducer
