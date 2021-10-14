import { makeStyles } from "@material-ui/core";
import showCaseImage from '../../Assest/showCaseImage.jpg';
export default makeStyles((theme)=>({
    toolbar : theme.mixins.toolbar,
    Showcase : {
        // position  :'relative',
        // top : '100px',
        width : '100%',
        height  : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        // background : `url(${showCaseImage})`,
        background : `url('https://images.unsplash.com/photo-1633164227069-df58d5f183df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8M2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
    },
    Heading : {
        display : 'flex',
        justifyContent : 'left',
        color : 'white'  
    },
    searchbar:{
        display: 'flex',
        border : '2px solid red',
        borderRadius : '20px',
        color : 'white',
    },
    searching : {
        width : '70vw',
        height : '4.4vh',
        padding : '15px',
        border : 'none',
        borderRadius : '20px',
        outline  : 'none',
        fontSize : '1.2rem',
    },
    searchIcon : {
        
        padding : '10px',
        paddingTop : '13px'
        
    },
    Search : {
        fontSize : '2rem'
    }
}))