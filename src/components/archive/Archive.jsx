import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlined as Delete } from '@mui/icons-material';


import { useContext } from 'react';
import { DataContext } from '../context';

const StyledCard=styled(Card)`
    width:240px;
    margin:8px;
    border: 1px solid black;
    border-radius:5px;

`;

const Archive = ({note}) => {

    const {setNotes,archiveNotes,setArchiveNotes,setDeletedNotes}=useContext(DataContext);

    const UnarchiveNote=(note)=>{
        const updatedNotes=archiveNotes.filter(data=>data.id !==note.id)
        setArchiveNotes(updatedNotes);
        setNotes(prevArr=>[note,...prevArr])
    }

    const deleteNote=(note)=>{
        const updatedNotes=archiveNotes.filter(data=>data.id !==note.id)
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr=>[note,...prevArr])
    }

  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text  }</Typography>
        </CardContent>
        <CardActions>
            <Unarchive
                style={{marginLeft:'auto', cursor:'pointer'}}
                onClick={()=>UnarchiveNote(note)}
            />
            <Delete
                style={{cursor:'pointer'}}
                onClick={()=>deleteNote(note)}
            />
        </CardActions>
    </StyledCard>
  )
}

export default Archive;
