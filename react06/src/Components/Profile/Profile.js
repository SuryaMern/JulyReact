import React from 'react'
import "./Profile.css"
function Profile() {
  return (
    <div className='all'>
      <div className="product_shadow">
        <div className="product_main">
            <div className="product_image">
                <img className="product_img" src='https://cdn-media.myfavdesigners.com/unsafe/category/e3525382-3392-4aed-8d0e-e2d72fd95cad.jpeg?tr=w-435,h-600,fo-auto'/> </div>
                <div className='logo_text'>
                <div className="product_logo">
                    <img className="logo_img" src='https://cdn-media.myfavdesigners.com/unsafe/category/63372b07-7dd6-422c-8db5-c174f9527efa.jpeg'/></div>
                    <div className="product_text">
                    <p style={{fontSize:25}}>Vedant_Jain</p>
                    </div>
                </div>
                
                    <div>
                        <p style={{fontSize:20,fontWeight:'bold'}}>An Ivory White Shortsuit</p>
                        <p style={{fontSize:23}}>Rs. 25002</p>
                    </div>
                </div>
            </div>
        </div>        
  )
}

export default Profile
