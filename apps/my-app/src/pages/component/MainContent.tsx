"use client"

import React from 'react'
import { Box } from '@mui/material'
import {useRecoilValue} from  'recoil'
import { moviesData } from '../utilites/atoms/moviesData'
import  MovieList from './MovieList'

 let MainContent = ()=>{

    let useMoviesData = useRecoilValue(moviesData);
    console.log(`moviesData  loaded from atom is`, useMoviesData)

    return(<>
    
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Box sx={{
            margin:'0',
            padding:'0',
            filter:'blur(1px)',
            backgroundBlendMode: 'darken',
            backgroundColor:'rgba(0,0,0,0.7)',

        }}>
        <img src = '/wallpaper.jpg' 
        alt = 'camera image' style = {{
        
            maxWidth:'100%',
            height:'auto',

        }}/>
        </Box>
        
    </div>
    <MovieList/>

    </>)
}

export default MainContent