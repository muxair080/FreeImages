import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
  
  toolbar :{
    display : 'flex',
      justifyContent  : 'space-between'
  }, 
  logo : {

    },
  Searching:{
        position: 'relative',
        display : 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      // width: '40vw',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      [theme.breakpoints.down('xs')]: {
        display : 'none'
      },


    },

    input :{
        display  :'flex',
        paddingLeft : theme.spacing(2),
        color : 'white',
        width : '30vw'

    },
    MoreIcon :{
        fontSize : '2.5rem',
        color : 'white'
    }
}))