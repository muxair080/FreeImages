import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    toolbar : theme.mixins.toolbar, 
    imgItem:{
        width : '300px',
        height : '450px'
    },
   
    Imgs : {
        position : 'relative',
        width : '300px',
        height : '400px',
        cursor : 'pointer',
        zIndex : '0',
        backgroundColor : 'black'
    },
   
    FullWidthImg :  {
        position :  "relative",
        top : '-30px',
        width : '100%',
        height   : 'auto',
        display  : 'flex',
        flexDirection : 'column', 
    },
    img : {
        width : '80vw',
        height   : '70vh',
       

    },
    crossIcon :{
        // width : '100%',
        fontSize : '4rem',
        color :'white',
        position : 'absolute',
        display : 'flex',
        alignItems : 'center',
        cursor : 'pointer'
    },
    Link:{
        textDecoration : 'none',
        fontSize : '2rem',
        color : 'black',
     
        '&:hover' : {
            color : 'blue',
            fontWeight : 'bolder'
        }
    },
    content : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'space-between',
    },
    Icons  : {
        display : 'flex',
    },
    likes : {
        display : 'flex',
        alignItems : 'center',
    },
    likesnumber : {
        fontSize : '1rem'
    },

   profileimg:{
       width : '40px',
       height : '30px',
       borderRadius : '100%',
       cursor: 'pointer'
   } ,
   icons_and_profile :{
       display :'flex',
       justifyContent : 'space-between',
       padding : '0px 20px'
   }
}))