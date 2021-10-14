import React , {useState , useEffect} from 'react';
import {Grid , Button } from '@material-ui/core';
import useStyles from './Style';
import ShowImage from './Image/ShowImg';
import Spiner from '../Loader/Loader';
import FullScreenImage from './Image/FullScreenImage';


// GetRelatedImgsData
const Images = ({ Category , ShowHideProfile , setProgress }) => {
    const [Images, setImages] = useState([]);   
    const [page, setpage] = useState(1);
    const [TotalResults, setTotalResults] = useState(0);
    const [loading, setloading] = useState(false);
    const [FullImage, setFullImage] = useState('');
    const [DisplayImage, setDisplayImage] = useState(false);
    
  const fetchMoreData = async() => {     
    setProgress(10);
    setpage(page+1);
    setProgress(30);
    const Url =`https://api.unsplash.com/search/photos/?client_id=00O5Hl6yRIrTyGUsuWeiXTwIHS4kDd8jbtaHxYAupao&query=${Category}&page=${page}`;
    setloading(true);
    let response = await fetch(Url);
    setProgress(50);
    let paresedata = await response.json();
    setProgress(70);
    setImages(Images.concat(paresedata.results));
    setloading(false);
    setTimeout(() => {
      setProgress(100);
    }, 4000);
  };

  const FetchData = async ()=>{
    const Url = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_IMAGES_KEY}&query=${Category}`;
    setProgress(30);
    setloading(true);
    const response = await fetch(Url);
    setProgress(50);
    const data = await response.json();
    setProgress(70);
    setImages(data.results);
    setTotalResults(data.total_pages);
    setTimeout(() => {
      setProgress(100);
    }, 4000);
    setloading(false);

}


  useEffect(() => {
    FetchData();
  }, [Category])

  function DisplayFullScreenImage(state, img ){
      setFullImage(img);
    setDisplayImage(state);
}

function OpenFullScreenImage(){
  setDisplayImage(true);
}

function CloseFullScreenImage(){
  setDisplayImage(false);
  
}

    const classes = useStyles();
    return (
        <main className  ={classes.Main_Section}>
          
         <div className = {classes.toolbar}/>    
      
      {
      DisplayImage && <FullScreenImage Image = {FullImage}  DisplayFullScreenImage = {DisplayFullScreenImage} CloseFullScreenImage={CloseFullScreenImage} ShowHideProfile = {ShowHideProfile}/> 
    }
    <Grid container spacing = {2} className = {classes.Container} >
            
                    
                { 
               
                Images.map((imageItem , index)=>{
                    return <Grid className = {classes.Item} xs = {12} sm = {6} md = {4} lg = {3}  item key = {index}>
                        <ShowImage  imageItem ={imageItem} DisplayFullScreenImage = {DisplayFullScreenImage} ShowHideProfile = {ShowHideProfile} OpenFullScreenImage = {OpenFullScreenImage}/>
                    </Grid> 
                    })
                }
                </Grid>
       
         {loading? <Spiner/> : null}
          <Button className = {classes.seeMoreBtn} variant = 'contained' color ='secondary' onClick = {fetchMoreData}>See More</Button>
          
        </main>
    )
    
  }

export default Images
