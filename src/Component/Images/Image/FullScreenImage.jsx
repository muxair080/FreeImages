import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@material-ui/core";
import useStyles from "./Style";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowDownwardIcon from  '@material-ui/icons/ArrowDownward';


const style = {
  position: "relative",
  top: "15%",
  left: "10%",
  width: '80vw',
  bgcolor: "background.paper",
  border: 'none',

};

export default function BasicModal({ Image, DisplayFullScreenImage ,CloseFullScreenImage , ShowHideProfile }) {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  return (
<>
  <div className = {classes.toolbar}/>
      <Modal
        open={open}
        onClose={CloseFullScreenImage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className = {classes.Modal}
      >
        <Box sx={style}>
          <Box className={classes.FullWidthImg}>
                 <CloseIcon className = {classes.crossIcon}  onClick = {()=>DisplayFullScreenImage(false , '')}/>  
            <img className = {classes.img} src={Image.urls.full} alt="Some Thing went wrong"/>
        </Box>
            <Box className = {classes.icons_and_profile}>
              <Box>
                  <IconButton>
                      <ArrowDownwardIcon/>
                  </IconButton>
                  <IconButton>
                      <FavoriteIcon/>
                  </IconButton>
              </Box>
              <Box className={classes.profile}>
                   <img className = {classes.profileimg} src={Image.user.profile_image.large} alt="profile" title = {Image.user.username} onClick ={()=> ShowHideProfile(true , Image)}/> 
               </Box>
            </Box>
        </Box>
       
      </Modal>
  </>
  );
}
