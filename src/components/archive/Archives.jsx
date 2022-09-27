import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import { useContext } from 'react';




//components

import Archive from './Archive';

import { DataContext } from '../context';



const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />

                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive note={archive} />
                            </Grid>
                        ))
                    }
                </Grid>


            </Box>
        </Box>
    )
}

export default Archives;
