import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    toolbar : theme.mixins.toolbar,
    goBack :{
        postion : 'relative',
        display : 'flex',
        justifyContent : 'left',
        top:'20px',
        left : '10px'
    
    },
    PersonalInfo : {
        paddingLeft : '10px',
        paddingRight : '10px',
        wordBreak : 'break-all',
        wordWrap : 'break-word'
    },
 
    Typo:{
        display: 'flex',
        [theme.breakpoints.down('xs')]:{
            justifyContent : 'center',
        }
    },
    prfImage_name  :{
       
        position : 'relative',
        top : '50px',
        display : 'grid',
        gridTemplateColumns : '1fr 1fr',
        justifyContent : 'center',
        width : '100%'
    },
  
    PersonalData  :{
        width : '100%',
        display : 'grid',
        gridTemplateColumns : '1fr 1fr 1fr',
        // marginLeft : '100px'
        
        [theme.breakpoints.down('sm')] : {
            gridTemplateColumns : 'repeat(2 , 1fr)',
        },
        [theme.breakpoints.down('xs')] : {
            gridTemplateColumns : 'repeat(1 , 1fr)',
        }
    },
    ProfileImage : {
        display : 'flex',
        justifyContent : 'right',
        position : 'relative',
        right : '20px',
        [theme.breakpoints.down('lg')]:{
            justifyContent : 'center',
        }
    },
    profile_img : {
        width : '150px',
        height : '150px',
        border : '1px solid black',
        borderRadius : '100%',
       
    },
    Contact : {
        width : '100%',
        display :  "flex",
        marginTop : '-50px',
       justifyContent : "center",
       alignItems : "center",
       marginLeft : '10px',
       [theme.breakpoints.down('sm')] : {
        marginTop : '0px',
    },
    },
    button : {
        margin : '5px'
    },
    Notavalibal : {
        fontSize : '1.2rem'
    },
    HireOrNot:{
        display : 'flex',   
        justifyContent : 'center'
    },
    Colection_Likes_Photos :{
        width : '100%',
        display : 'flex',
        justifyContent : 'left',
        marginTop : '90px',
        borderBottom : '2px solid black'
    },
    MenuItem:{
        fontSize : '1.3rem',
        marginRight: '10px',
        cursor : 'pointer'
    },
    Icons : {
        color : 'darkgrey',
        border : 'none',
        marginBottom : '10px',
        '&:hover' :{
            color : 'black',
            borderBottom : '1px solid black'
        }
    },
    Main_Section:{
        margin : theme.spacing(10)
    }
   
}))