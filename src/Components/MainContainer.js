import React, { useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {

  const [btnID,setBtnID]=useState(0)
  const handleBtnById=(value)=>{
    setBtnID(value)
  }
  return (
    <div className='shadow-lg w-full p-3'>
        <ButtonList handleBtnById={handleBtnById}/>
        <VideoContainer btnID={btnID}/>
    </div>
  )
}

export default MainContainer