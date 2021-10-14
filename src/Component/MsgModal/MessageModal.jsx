
import React , {useState} from 'react';
import {Box , Button , Typography , Modal} from '@material-ui/core';
import useStyles from './Style';
import CheckIcon from '@material-ui/icons/Check';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ ImageItem, CloseModal}) {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={open}
        onClose = {CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.profile_name}>
            <img className = {classes.profile_img} src={ImageItem.user.profile_image.large} alt="Profile"/>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {ImageItem.user.name}
          </Typography>
          </div> 
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Send Message to {ImageItem.user.name} and recive reply through your email.
          </Typography>
          <Typography variant = 'body2' id="modal-modal-description">
           <CheckIcon className = {classes.checkicon}/> <span>Follow <a href = '/' target = '_blank'>Message GuidLines</a></span>
          </Typography>
          <Typography variant = 'body2' id="modal-modal-description">
           <CheckIcon className = {classes.checkicon}/> <span>No Spam</span>
          </Typography>
          <Typography variant = 'body2' id="modal-modal-description">
           <CheckIcon className = {classes.checkicon}/> <span>For legal questions see <a href = '' target = '_blank'>see the licence</a></span>
          </Typography>
          <Box>
          <Typography variant = 'body1' id="modal-modal-description">
            What  are you writing about.
          </Typography>
          <Typography variant = 'body2' id="modal-modal-description" className = {classes.thanksmsg}>
            Say Thanks
          </Typography>
          </Box>
          <Box>
            <Typography variant = 'h6'>Your Message :</Typography>
            <textarea className = {classes.Textmsg} name="message" id="message" cols="50" rows="10" placeholder = 'Type Your Message'></textarea>
          </Box>
          <Box className = {classes.sendbtn}>
            <Button
              className={classes.sendbutton}
              vairant="contained"
              color="default"
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
