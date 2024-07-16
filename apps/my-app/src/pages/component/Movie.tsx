"use client"

import React from 'react';
import { useState } from 'react';
import  {movies,moviesData} from '../../utilites/moviesData'

import  {useRecoilValue} from  'recoil';
import { Box } from '@mui/material';

interface modifymovie {

    props:movies

}

let Movie:React.FC<modifymovie> = (items)=>{

    let test  = {...{...items}}
    let  [movie,setMovie] = useState<modifymovie>(items)

console.log(`Inside the item component`,items)

    return( <>

    {movie ? (<Box sx={{
        width:'500',
        heigth:'450',

    }}>

<img src = {movie.props.poster_path} width='auto'height='350' alt="movie_poster"/>

    </Box>):(<h3>Loading ...</h3>)}
    
    </>)
}

export default Movie