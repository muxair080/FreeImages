import './App.css';
import React , {useState , useEffect} from 'react';
import ShowImages from './Component/Images/Images';
import Navbar from './Component/Navbar/Navbar';
import ProfilePage from './Component/ProfilePage/ProfilePage';
import Showcase from './Component/ShowCase/Showcase';
import LoadingBar from 'react-top-loading-bar';
import MenuItems from './Component/MenuBar/MenuBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [Category, setCategory] = useState('random'); 
  const [SearchValue, setSearchValue] = useState('');
  const [Profile, setProfile] = useState(false);
  const [profileData, setprofileData] = useState([])
  const [state, setstate] = useState(10);

  function HandleChange(e){
    setSearchValue(e.target.value);
   
  }
  function GetSearchingData( event){
    if(event.key === 'Enter'){
      setCategory(SearchValue);
      event.target.value = '';
    }
  }
  function ShowHideProfile(value , data){
      setProfile(value);
      setprofileData(data)

  }
  function setprogress(progress){
    setstate(progress);
  }
  return (
    <div className="App">
     <LoadingBar color = '#f11946' progress = {state}/>
     <Router>
      <Navbar GetSearchingData = {GetSearchingData} HandleChange = {HandleChange}/>
      {/* <MenuItems/> */}
     </Router>
      
      {
        Profile ?<ProfilePage ImageItem = {profileData} ShowHideProfile = {ShowHideProfile}/>:<div> <Showcase GetSearchingData = {GetSearchingData} HandleChange = {HandleChange}/>  <ShowImages Category = {Category} ShowHideProfile = {ShowHideProfile} setProgress ={setprogress}/>
     
      </div>}
    </div>
  );
}

export default App;
