import React from 'react'

const Button = ({name,videoID,handleBtnById}) => {
    const passBtnById=()=>{
      handleBtnById(videoID)
    }
  return (
    <div>
        <button className='rounded-lg py-2 m-2 bg-gray-300 text-md w-36' onClick={()=>{passBtnById()}}>{name}</button>
    </div>
  )
}

export default Button