import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import { useContext } from 'react';




//components
import Form from './form';
import Note from './note';

import { DataContext } from '../context';
import EmptyContent from './EmptyContent';


const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
}));

const Notes = () => {

    const { notes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Form />
                {
                    notes.length > 0 ?
                        <Grid container>
                            {
                                notes.map(note => (
                                    <Grid item>
                                        <Note note={note} />
                                    </Grid>
                                ))
                            }
                        </Grid>: <EmptyContent/>
                }


            </Box>
        </Box>
    )
}

export default Notes
