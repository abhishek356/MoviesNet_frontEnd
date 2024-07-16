"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import axios from 'axios'
import styles from "@/styles/Home.module.css";
import Navbar from "@repo/ui/navbar"
import MainContent from './component/MainContent'
import { useEffect } from "react";
import { LineAxisOutlined } from "@mui/icons-material";
import {movies,moviesData} from '../utilites/moviesData'
import {useSetRecoilState} from 'recoil'
import { Box, Typography,Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  useloadData('https://jsonfakery.com/movies/random/100');

  return (
    <>
    <Box sx = {{
      backgroundColor:'#2a2438',
      fontSize:'62.5%',

    }}>
    <Navbar/>
    <MainContent/>
    <footer style  ={{
      position:"fixed"
    }}>
      <Typography variant='h6'>Under the new Indian law on data protection, we inform you that
        we save your history of pages you have visited on MoviesNet. With that data, we may
        show you trailers on external  social  media  and video platforms.
      </Typography>
      <Button>I agree</Button>
      <Button>more info</Button>

    </footer>
    </Box>
    

    </>
  );
}


let useloadData =  (url:string)=>{

  let setMoviesData = useSetRecoilState(moviesData)


  let fetchInitialMovieData = async()=>{


    try{

      let res = await axios.get(url);
    
      console.log(`value received from api`,res)
      setMoviesData(res.data)
      
    }
    catch(err)
    {
      console.log(`Error occured while fetching data`,err)
    }
    

  }

  useEffect(()=>{
    fetchInitialMovieData();
    
    return ()=>{
      console.log(`component unmount `)
    }
  },[])

}
