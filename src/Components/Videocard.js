import React from 'react';
import millify from "millify";

const Videocard = ({ info }) => {
    if (!info) {
        return null;
    }

    const { snippet, statistics } = info;
    if (!snippet) {
        return null; // or handle the case when snippet is undefined
    }
    // console.log(info ) 

    const { channelTitle, thumbnails, title } = snippet;

    return (
        <div className='p-2 my-4 mx-3 w-[24rem] shadow-md h-[360px] rounded-lg hover:scale-105 transition duration-500'>
            <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg w-full' />
            <ul>
                <li className='font-bold py-2 text-ellipsis overflow-hidden'>{title}</li>
                <li className='text-gray-600 font-medium pl-1'>{channelTitle}</li>
                <li className='pl-1'>{millify(statistics && statistics?.viewCount)} views</li>
            </ul>
        </div>
    );
};



export default Videocard;



//Higher order Component in react 
/* export const AdVideocard=({info})=>{
    return(
        <div className='p-2 border border-pink-400'>
            <Videocard info={info}/>
        </div>
    )
} */
