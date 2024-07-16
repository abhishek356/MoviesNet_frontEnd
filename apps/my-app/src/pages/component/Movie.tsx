"use client"

import React from 'react';
import { useState,useEffect } from 'react';
import  {movies,moviesData} from '../../utilites/moviesData'

import  {useRecoilValue} from  'recoil';
import { Box } from '@mui/material';

interface modifymovie {

    props:movies

}

let Movie:React.FC<modifymovie> = ({props})=>{


    useEffect(()=>{
        setMovie(props)
    },[props])

   // let test  = {...{...items}}
    let  [movie,setMovie] = useState<movies>(props)

console.log(`Inside the item component`,props)

    return( <>

    {movie &&movie.poster_path ? (<Box sx={{
        width:'500',
        heigth:'450',

    }}>

<img src = {movie.poster_path} width='auto'height='350' alt="movie_poster"/>

    </Box>):(<h3>Loading ...</h3>)}
    
    </>)
}

export default Movie