import {makeStyles} from '@material-ui/core';

export default  makeStyles((theme)=>({
    toolbar : theme.mixins.toolbar,
    MenuBar:{
        margin : '20px'
    },
    // MenuItems : {
    //     padding : '10px',
    // },
    items : {
        color : 'black',
        textDecoration : 'none',
        padding  : '10px'
    }
}))