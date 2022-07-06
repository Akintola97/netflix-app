import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const Movie = ({item}) => {
    const [like, setLike] = useState([false]);
    


 return (
    <div className='w-[43vmin] inline-block cursor-pointer relative p-2'>

    <img className = 'w-full h-auto block' src ={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
  
    <div class='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
      <p className='white-space-normal text-[1.5vmin] flex items-center h-full justify-center text-center'>{item?.title}</p>
      <p>
        {like ? <FaHeart className='absolute top-4 left-4' /> : <FaRegHeart className='absolute top-4 left-4' />}
      </p>
      </div>
  </div>
  )
}

export default Movie