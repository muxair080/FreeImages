import {makeStyles} from '@material-ui/core';
import createSpacing from '@material-ui/core/styles/createSpacing';

export default makeStyles((theme)=>({
    // toolbar : theme.mixins.toolbar,
    Item : {
        height  :'auto'
    },
    Main_Section:{
        margin : theme.spacing(3)
    },
    seeMoreBtn : {
        marginTop : '10px'
    }
}))