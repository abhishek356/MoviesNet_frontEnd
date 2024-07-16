"use client"

import React from 'react';
import { useState } from 'react';
import  {movies,moviesData} from '../utilites/atoms/moviesData'

import  {useRecoilValue} from  'recoil';
import { Box } from '@mui/material';


let Movie:React.FC<movies> = (items)=>{

    let test  = {...{...items}}
    let  [movie,setMovie] = useState<movies>(items)

console.log(`Inside the item component`,test)

    return( <>

    {movie ? (<Box sx={{
        width:'500',
        heigth:'450',

    }}>

<img src = {movie.items.poster_path} width='auto'height='350' alt="movie_poster"/>

    </Box>):(<h3>Loading ...</h3>)}
    
    </>)
}

export default Movie