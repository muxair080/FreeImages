import React, { useState,useEffect } from 'react';
import { Typography , Box } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './Styles';
const Showcase = ({GetSearchingData , HandleChange}) => {
    const classes = useStyles();
    return (
        <>
        <div className = {classes.toolbar}/>
        <div className = {classes.Showcase}>
            <Box>
            <div>
                    <Typography className = {classes.Heading} variant = 'h3'>Free Images</Typography>
                    <Typography className = {classes.Heading} varaiant = 'body1'>The internet’s source of freely-usable images.</Typography>
                    <Typography className = {classes.Heading} varaiant = 'body1'>Powered by creators everywhere.</Typography>
          
          </div>
          <div className={classes.searchbar}>
                
                <div className = {classes.searchIcon}><Search className = {classes.Search}/></div>
                <div className = {classes.input_Field}>
                    <input type="text" name='search' className={classes.searching} placeholder = 'Search Here' autoComplete = 'off' onKeyPress = {(event)=>GetSearchingData(event)} onChange = {(event)=>HandleChange(event)}/>
                </div>
          </div>
            </Box>

            
        </div>
        </>
    )
}

export default Showcase
