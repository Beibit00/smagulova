import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import { useContext } from 'react';




//components

import DeletedNote from './DeletedNote';

import { DataContext } from '../context';



const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
}));

const DeletedNotes = () => {

    const { deletedNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />


                <Grid container>
                    {
                        deletedNotes.map(note => (
                            <Grid item>
                                <DeletedNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>


            </Box>
        </Box>
    )
}

export default DeletedNotes
