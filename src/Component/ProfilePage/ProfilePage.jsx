import React,{useState , useEffect} from 'react'
import {Button, Grid ,IconButton, Modal, Typography} from '@material-ui/core'
import useStyles from './Style'; 
import Alert from '../Alert/Alert';
import MessageModal from '../MsgModal/MessageModal';
import HireModal from '../HireModal/HireModal';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CollectionsIcon from '@material-ui/icons/Collections';
import Image from '../Images/Image/ShowImg';
const ProfilePage = ({ImageItem , ShowHideProfile}) => {
   const classes =  useStyles();
    const [Follow, setFollow] = useState('Follow');
    const [ShowAlert, setShowAlert] = useState(false);
    const [MsgModal, setMsgModal] = useState(false);
    const [hireModal, sethireModal] = useState(false);
    const [Photo  , setPhoto] = useState([]);
   function Following(){
        Follow === 'Follow'? setFollow('Following') : setFollow('Follow');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
   }
   function OpenModal(){
       setMsgModal(true);
   }
   function CloseModal(){
       setMsgModal(false);
   }

   function OpenHireModal(){
        sethireModal(true);
   }

   function CloseHireModal(){
        sethireModal(false);
   }

   async function DisplayPhoto(){
    const Url =`https://api.unsplash.com/search/photos/?client_id=00O5Hl6yRIrTyGUsuWeiXTwIHS4kDd8jbtaHxYAupao&query=random&page=1`;

    const response = await fetch(Url);
    const data = await response.json();
    setPhoto(data.results);
   }
   useEffect(()=>{
    DisplayPhoto();
   },[])


    return (
        <>
        <div className = {classes.toolbar}/>
        {ShowAlert ? <Alert name = {ImageItem.user.name}/> : null
        }
        {
           MsgModal ? <MessageModal ImageItem ={ImageItem} CloseModal = {CloseModal}/> : null
        }
       
        {
           hireModal ?<HireModal ImageItem ={ImageItem} CloseModal = {CloseHireModal} />  : null
        }
       
        <Button onClick = {()=>{ShowHideProfile(false , [])}} className = {classes.goBack} vairant = 'contained' color = 'secondary'>Back</Button>
          {/* <div className={classes.prfImage_name}> */}
             <div className ={classes.PersonalData}>
                    <div className={classes.ProfileImage}>
                    <img className = {classes.profile_img} src={ImageItem.user.profile_image.large} alt="Profile" />
                    </div>  
                 
                    <div className = {classes.PersonalInfo}>
                    
                    <Typography className = {classes.Typo}  variant = 'h2'>{ImageItem.user.username}</Typography>
                        <Typography className = {classes.Typo} variant = 'h4'>{ImageItem.user.name}</Typography>
                        <Typography className = {classes.Typo} variant = 'body1'>{'From  '+ImageItem.user.location}</Typography>
                        <Typography  className = {classes.Bio , classes.Typo}variant = 'body1'>{ImageItem.user.bio}</Typography>
                        <Typography  className = {classes.Typo}variant = 'body2'>{ImageItem.user.for_hire ? <Typography className = {classes.HireOrNot}> <div><CheckCircleIcon color = 'primary'/></div>  <div>'is avalibal for hire'</div></Typography> : <Typography className = {classes.HireOrNot}> <div><CancelIcon className = {classes.Notavalibal} color = 'secondary'/></div> <div className = {classes.text}>  is Not avalibal for Hire</div></Typography>} </Typography>
                    </div>
                    <div className = {classes.Contact}>
                        <Button className ={classes.button} variant = 'contained' color = 'primary' onClick = {Following}>{Follow}</Button>
                        <Button className ={classes.button} variant = 'contained' color = 'primary' onClick = {OpenModal}>Message</Button>
                        <Button disabled = {ImageItem.user.for_hire === false} className ={classes.button} variant = 'contained' color = 'primary' onClick = {OpenHireModal}>Hire</Button>
                    </div>
             </div> 
            <div className = {classes.Colection_Likes_Photos}>  
                <div className= {classes.Icons}>
                    <AddPhotoAlternateIcon  className = {classes.icon} /> <span className = {classes.MenuItem}>Photos</span>
                </div>   
                <div className = {classes.Icons}>
                    <FavoriteIcon className = {classes.icon} /> <span className = {classes.MenuItem}>Likes</span>
                </div>   
                <div className={classes.Icons}>
                    <CollectionsIcon className = {classes.icon} /> <span className = {classes.MenuItem}>Collections</span>
                </div>   
        </div>
       
        <div className = {classes.Main_Section}>
        <Grid container spacing = {2} >
            {
                Photo.map((photo , index)=>{
                    return <Grid item key = {index}>
                        <Image imageItem = {photo}  />
                    </Grid>
                })
            }
        </Grid>
        </div>
        </>
    )
}

export default ProfilePage
