import React from 'react'
import logo from '../assets/Linkedin.svg'
import './Style/navbar.css'
import { AppBar, IconButton, Toolbar,Box, Avatar } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, Link } from "react-router-dom";
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const Navbar = () => {
  return (
    <div className='navbar'>
      <AppBar position='static' sx={{bgcolor:"white"}}>
        <Toolbar>
        <Box component='div' display='flex' sx={{mr:7}}>
        <Box component="div" display='flex' width='480px' height='32px' sx={{ml:52 }}>
        <IconButton size='medium' edge="start" color='inherit' aria-label="logo">
            <img src={logo} alt=""></img>
          </IconButton>
          <Search size="small">
            <SearchIconWrapper>
              <SearchIcon sx={{color:"black"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              size='small'
              inputProps={{ 'aria-label': 'search' }}
              sx={{width:"280px",
              height:"32px",
              '&:hover':{
                width:"382px",
                height:"32px",
              },}}
            />
          </Search>
        </Box>
        <Box  component='div' display='flex'  fontSize='large'  sx={{color:"grey", width:"40px", height:"24px" }} >
        
       <Link to="/home"><HomeIcon sx={{mr:6}}/> </Link>
       <Link to="/network"><PeopleAltIcon sx={{mr:6}}  /> </Link>
       <WorkIcon sx={{mr:6}} />
       <SmsRoundedIcon sx={{mr:6}} />
       <NotificationsIcon sx={{mr:6}}/>
      <Link to="/profile"> <Avatar/></Link>
        </Box>

        </Box>

       

         

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar