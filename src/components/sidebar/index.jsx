import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useContext,useState } from 'react';
import { DataContext } from '../context';


//components
import NavList from '../listitem';

const drawerWidth = 240;
const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';





const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
 
  ...theme.mixins.toolbar,
}));
const Search = styled('div')(() => ({
  position: 'relative',
  border: '1px solid ',
  borderRadius:'5px',
  boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)',
  
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: '50px',
  width: '600px',
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(1),
  //   width: '80px',
  // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black'
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '600px',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));

const Header = styled(AppBar)`
    z-index:1201;
    background:#fff;
    height:70px;
    box-shadow: inset 0 -1px  0 0  #dadce0;
`;
const Heading=styled(Typography)`
    color:black;
    margin-left:20px;
`;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer=({note})=> {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(prevState=>!prevState);
  };

  const [inputValue, setInputValue] = useState("");
  const {addNote,setAddNote}=useContext(DataContext);
 

  const serchedItems=()=>addNote.filter((note)=>{
    const result=note.heading.includes(inputValue)
    return result
  })
    
    
    
  
  // const Note = ({note}) => {

  //   const {notes,setNotes,setArchiveNotes,setDeletedNotes}=useContext(DataContext);

  //   const archiveNote=(note)=>{
  //       const updatedNotes=notes.filter(data=>data.id !==note.id)//new array from !==
  //       setNotes(updatedNotes);
  //       setArchiveNotes(prevArr=>[note,...prevArr])
  //   }

  
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header   open={open}>
        <Toolbar>
          <IconButton
            
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt='logo' style={{width:30}}/>
          <Heading>Keep</Heading>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск"
              inputProps={{ 'aria-label': 'search' }}
              value={inputValue}
              onChange={(e)=>{
                setInputValue(e.target.value)
              }}
            />
          </Search>
        </Toolbar>
      </Header>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <NavList/>
        

        
        
        
        
      </Drawer>
      
    </Box>
  );
}
export default MiniDrawer;
