import React from 'react'
import Notes from './searchbox/index';
import MiniDrawer from './sidebar/index';
import DeletedNotes from './trash/DeletedNotes';
import Archives from './archive/Archives';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import { Box } from '@mui/material';
const Main = () => {
  return (
    <>  <Box style={{display:'flex',width:'100%' }}>
            <Router>
                <MiniDrawer/>
                <Routes>
                    <Route path='/' element={<Notes/>}/>
                    <Route path='/archive' element={<Archives/>}/>
                    <Route path='/trash' element={<DeletedNotes/>}/>

                </Routes>
            </Router>
            
            
        </Box>
    </>)
}

export default Main
