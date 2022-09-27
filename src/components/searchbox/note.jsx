import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlined as Delete } from '@mui/icons-material';


import { useContext } from 'react';
import { DataContext } from '../context';

const StyledCard=styled(Card)`
    width:240px;
    margin:8px;
    border: 1px solid black;
    border-radius:5px;

`;

const Note = ({note}) => {

    const {notes,setNotes,setArchiveNotes,setDeletedNotes}=useContext(DataContext);

    const archiveNote=(note)=>{
        const updatedNotes=notes.filter(data=>data.id !==note.id)//new array from !==
        setNotes(updatedNotes);
        setArchiveNotes(prevArr=>[note,...prevArr])
    }

    const deleteNote=(note)=>{
        const updatedNotes=notes.filter(data=>data.id !==note.id)
        setNotes(updatedNotes);
        setDeletedNotes(prevArr=>[note,...prevArr])
    }

  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text  }</Typography>
        </CardContent>
        <CardActions>
            <Archive
                style={{marginLeft:'auto', cursor:'pointer'}}
                onClick={()=>archiveNote(note)}
            />
            <Delete
                style={{cursor:'pointer'}}
                onClick={()=>deleteNote(note)}
            />
        </CardActions>
    </StyledCard>
  )
}

export default Note
