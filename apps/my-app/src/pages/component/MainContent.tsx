"use client"

import React from 'react'
import { Box, Typography } from '@mui/material'
import {useRecoilValue} from  'recoil'
import { moviesData } from '../utilites/atoms/moviesData'
import  MovieList from './MovieList'

 let MainContent = ()=>{

    let useMoviesData = useRecoilValue(moviesData);
    console.log(`moviesData  loaded from atom is`, useMoviesData)

    return(<>
    
    <div style={{
        width:'100%',
        height:'100%',
        display:'flex',
        
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2.1rem'
    }}>
        <div style={{
           
            width:'100vw',
            height:'100vh',
          //  filter:'blur(1px)',
            backgroundBlendMode: 'darken',
            backgroundColor:'rgba(0,0,0,0.6)',
            backgroundImage:'url(./wallpaper.jpg), linear-gradient(to bottom right, transparent, #2a2438)',
            backgroundSize:'cover',
            display:'flex',
           // justifyContent:'center'


        }}>
        {/* <img src = '/wallpaper.jpg' 
        alt = 'camera image' style = {{
        
            maxWidth:'100%',
            height:'auto',

        }}/> */}
        <Typography variant='h2' sx={{
           
            color:'#f8da5b',
            textAlign:'center',
            padding:'10rem',
            fontSize:'5.1rem',
            top:'50%',
            left:'50%',
            zIndex:'1',
            opacity:'1',
          //  filter:'blur(0px)'
          margin:'0'
            
            
        }}>Your streaming guide for movies, TV shows & sports
        <Typography variant='h6' sx={{
            color:'#dbd8e3',
            zIndex:'1',
            top:'80%',
            left:'50%'

        }}>Find where to stream new, popular & upcoming entertainment with MoviesNet.</Typography>
        </Typography>


       
        </div>
        
    </div>
 
    <MovieList/>

    </>)
}

export default MainContent