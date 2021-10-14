import React  ,{useState} from 'react'
import {AppBar , Toolbar , InputBase , Typography, Box, IconButton ,Menu , MenuItem} from '@material-ui/core'
import {Search} from '@material-ui/icons';
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import PersonOutlineOutlinedIcon from '@material-ui/icons//PersonOutlineOutlined';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './Style';
const Navbar = ({ GetSearchingData , HandleChange }) => {
    const classes = useStyles();
    const [mobileMenuAnchorEl, setmobileMenuAnchorEl] = useState(null);
    const ismobileMenueOpen = Boolean(mobileMenuAnchorEl);

    const OpenMobileMenu = (event) => { 
        setmobileMenuAnchorEl(event.currentTarget);
    }
    const CloseMobileMenu = () => {
        setmobileMenuAnchorEl(null);
    }
    const mobileMenu = (
        <Menu anchorEl = {mobileMenuAnchorEl} 
        onClose = {CloseMobileMenu}
        anchorOrigin={{
         vertical: 'top',
         horizontal: 'right',
       }} 
         keepMounted open = {ismobileMenueOpen}>
            <MenuItem  onClick = {CloseMobileMenu}><PersonOutlineOutlinedIcon/> Profile</MenuItem >
            <MenuItem  onClick = {CloseMobileMenu}><EditIcon/>Create Account</MenuItem >
            <MenuItem  onClick = {CloseMobileMenu}><ExitToAppIcon/>Log out</MenuItem >
        </Menu>
    ) 
  
    return (
        <>
        <AppBar position = 'fixed' >
          <Toolbar className = {classes.toolbar}>
                    <Box>
                            <Typography variant = 'h4' className = {classes.logo}>Free Images</Typography>
                    </Box>
                    <Box className = {classes.Searching}>
                        <Search/>
                        <InputBase type = 'text' className  = {classes.input} placeholder = 'SearchHere' onKeyPress = {(event)=>GetSearchingData(event)} onChange = {(e)=>HandleChange(e)}/>
                    </Box>
                    <IconButton onClick = {OpenMobileMenu}>
                        <MoreVertIcon className = {classes.MoreIcon}/>
                    </IconButton>
          </Toolbar>  
        </AppBar>
        {mobileMenu}
        </>
    )
}

export default Navbar
