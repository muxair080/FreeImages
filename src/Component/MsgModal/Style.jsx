import {makeStyles} from '@material-ui/core';

export default makeStyles(()=>({
    profile_name : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '20px'
    },
    profile_img : {
        width : '80px',
        height : '80px',
        border : '1px solid black',
        borderRadius : '100%',
        marginRight : '5px'
    },
    checkicon : {
        fontSize : '0.8rem'   
    },
   
    thanksmsg  :{
        backgroundColor : 'rgb(230, 227, 227)',
        width  : '100%',
        padding : '10px',
        border : '1px solid black'
    },
    Textmsg :{
        resize : 'none',
    },
    sendbtn:{
        width : '100%',
        display  : 'flex',
        justifyContent : 'right'
    },
    sendbutton :{
        backgroundColor : '#f3e5f5',
        fontWeight : 'bolder',
        
    }

}))