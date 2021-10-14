import React from 'react'
import image from '../../Assest/showCaseImage.jpg';
const MyProfile = () => {
    return (
        <div>
            <div className = {classes.MyProfileImg}>
                <div>
                    <img src= {image} alt='Profile'/>
                </div>
                <div>
                    <h3>Muhammad Uziar</h3>
                    <p>Downloads High</p>
                </div>
            </div>
            
        </div>
    )
}

export default MyProfile
