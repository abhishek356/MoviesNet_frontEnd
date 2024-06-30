"use client"

import React from 'react'
import { Box } from '@mui/material'

 let MainContent = ()=>{


    return(<>
    
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Box sx={{
            margin:'0',
            padding:'0'
        }}>
        <img src = '/wallpaper.jpg' 
        alt = 'camera image' style = {{
        
            maxWidth:'100%',
            height:'auto'
        }}/>
        </Box>
        
    </div>
    </>)
}

export default MainContent