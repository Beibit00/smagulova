import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as UnDelete, DeleteForeverOutlined as Delete } from '@mui/icons-material';


import { useContext } from 'react';
import { DataContext } from '../context';

const StyledCard = styled(Card)`
    width:240px;
    margin:8px;
    border: 1px solid black;
    border-radius:5px;

`;

const DeletedNote = ({ note }) => {

    const { notes, setNotes,deletedNotes, setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr])
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes);
        
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Delete
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteNote(note)}
                />
                <UnDelete
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                    onClick={() => restoreNote(note)}
                />

            </CardActions>
        </StyledCard>
    )
}

export default DeletedNote;
