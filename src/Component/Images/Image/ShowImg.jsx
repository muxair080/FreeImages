import React , {useState} from 'react'
import {Card , CardMedia ,CardContent, CardActions} from '@material-ui/core';
import useStyles from './Style';
import ArrowDownwardIcon from  '@material-ui/icons/ArrowDownward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from "@material-ui/core/IconButton";
import {saveAs} from 'file-saver';
import ProfilePage from '../../ProfilePage/ProfilePage';

const Image = ({imageItem , DisplayFullScreenImage , ShowHideProfile , OpenFullScreenImage}) => {

    const classes = useStyles();
   
    function DownloadImage(image_url , name){
        saveAs(image_url , name);
    }


    return (  <>
        <div className = {classes.toolbar}/>
        {
        <Card className = {classes.imgItem}>
            <CardMedia className = {classes.Imgs} component = 'img' alt = 'Image' image = {imageItem.urls.full} onClick = {()=> {DisplayFullScreenImage(true ,imageItem); OpenFullScreenImage()}}/>
            <CardActions className = {classes.content}>
               <div className={classes.Icons}>
                   <div>
                    <IconButton>
                              <ArrowDownwardIcon onClick = {()=> DownloadImage(imageItem.urls.full  , imageItem.id)}/>
                    </IconButton>
                   </div>

                   <div  className = {classes.likes}>
                    <IconButton>
                        <FavoriteIcon/>
                    </IconButton>
                    <div className = {classes.likesnumber}>{imageItem.likes} </div>
                   </div>   
               </div>
               
               <div className={classes.profile}>
                   <img className = {classes.profileimg} src={imageItem.user.profile_image.large} alt="profile" title = {imageItem.user.username} onClick ={()=> ShowHideProfile(true , imageItem)}/> 
               </div>
                </CardActions>
        </Card>
        }
         
    </>
     )
}

export default Image
