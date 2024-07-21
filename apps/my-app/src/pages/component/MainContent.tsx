"use client"

import React from 'react'
import { Box, Button, Typography,Container } from '@mui/material'
import {useRecoilValue} from  'recoil'
import { moviesData } from '../../utilites/moviesData'
import  MovieList from './MovieList'
import Navbar from '@repo/ui/navbar'
import CarouselCover from './CarouselCover'

 let MainContent = ()=>{

    let useMoviesData = useRecoilValue(moviesData);
    console.log(`moviesData  loaded from atom is`, useMoviesData)

    return(<>
    

    <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        margin:'0',
        padding:'0',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2.1rem',
        position:'relative'
    }}>
                    <Navbar/>

        <div style={{
           
         //   maxWidth:'100%',
            height:'100vh',
           // width:'',
          //  filter:'blur(1px)',
            backgroundBlendMode: 'darken',
            backgroundColor:'rgba(0,0,0,0.6)',
            backgroundImage:'url(./wallpaper.jpg), linear-gradient(to bottom right, transparent, #2a2438)',
            backgroundSize:'cover',
            display:'flex',
            objectFit:'cover',
            
           // justifyContent:'center'
          // filter:'blur(2px)',

            textAlign:'center',

        }}>
        {/* <img src = '/wallpaper.jpg' 
        alt = 'camera image' style = {{
        
            maxWidth:'100%',
            height:'auto',

        }}/> */}

        <Typography variant='h2' sx={{
           
            color:'#fcfefe',
            textAlign:'center',
          //  padding:'13rem',
          //  fontSize:'5.1rem',
            //:'unset',
            top:'50%',
            left:'50%',
            zIndex:'1',
            opacity:'1',
            marginTop:'1.2em',
            padding: { xs: '7rem', md: '10rem', lg: '8rem' },
            fontSize: { xs: '2rem', md: '3.5rem', lg: '5rem' },
            
        }}>Your streaming guide for movies, TV shows & sports
        <Typography sx={{
            color:'#dbd8e3',
            zIndex:'1',
            top:'80%',
            left:'50%',
           // fontSize:'1.2rem',
           // marginTop:'2rem',
            textAlign:'center',
          //  color: '#dbd8e3',
            fontSize: { xs: '1rem', md: '1.2rem' },
            marginTop: '1rem',


        }}>Find where to stream new, popular & upcoming entertainment with MoviesNet.</Typography>
       
       <Button variant="contained" size='large' sx={{
        backgroundColor:'#ffc93c',
        color:'black',
        '&:hover':{
            backgroundColor:'#ffa952'
        }
       }}>Discover Movies & TV shows</Button>
       <Button variant = 'outlined' size = 'large' sx = {{
color:'whitesmoke',
borderColor:'whitesmoke',
marginLeft:'5px',
'&:hover':{
    color:'#ffa952',
    borderColor:'#ffa952'
}
       }}>Features</Button>


        </Typography>

       
        </div>

    </div>
 
    <MovieList/>

    

    </>)
}

export default MainContent