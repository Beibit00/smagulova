import React from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState,useContext } from 'react';

import { DataContext } from '../context';
import {v4 as uuid} from 'uuid'

const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    width:600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    padding: 10px 15px;
    margin:auto;

`;

const note={
    id:"",
    heading:"",
    text:"" 
}

const Form = () => {
    const [showTitle, setShowTitle] = useState(false)
    const [addNote,setAddNote]=useState({...note,id:uuid()} && DataContext)
    

    const{notes,setNotes}=useContext(DataContext);



    const handleTitle = () => {
        setShowTitle(true);
    }
    const handleClickAway=()=>{
        setShowTitle(false)
        setAddNote({...note,id:uuid()})

        if(addNote.heading || addNote.text){
            setNotes(prevArr=>[addNote,...prevArr])
        }
    }

    const onTextCahnge=(e)=>{
        let changeNote={...addNote,[e.target.name]:e.target.value}
        setAddNote(changeNote)
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                {showTitle &&
                    <TextField
                        placeholder='Введите заголовок'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e)=>onTextCahnge(e)}
                        name='heading'
                        value={addNote.heading}
                    />}
                <TextField
                    placeholder='Заметка...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    onClick={handleTitle}
                    onChange={(e)=>onTextCahnge(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form
