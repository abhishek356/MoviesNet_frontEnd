"use client"

import {useEffect, useState} from "react";
import '../../styles/carousel.css'
import Carousel from  './carousel'


let img = [
'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6a/68/66/6a6866d0-63c6-4a51-a434-8849de3c851f/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png',
'https://static.vecteezy.com/system/resources/previews/006/874/233/original/netflix-logo-icon-on-white-background-free-vector.jpg',
'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/f6/a6/4e/f6a64ef5-3223-8f93-c3cb-107b3590032f/contsched.kkhjxyqu.png/1200x630wa.png',
'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/f9/2f/92/f92f9200-1cf5-6235-1d12-073d51c6e888/AppIcon-1x_U007emarketing-0-10-0-85-220.png/1200x630wa.png',
'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/70/1a/1e/701a1ec1-2115-cebe-5581-2951ccb74aa2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/ae/8c/cb/ae8ccb80-9489-6131-74ff-d2ca3aefb155/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png',
'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/d0/68/86/d0688643-2372-37a3-2ac7-91b541c1dc46/AppIcon-0-1x_U007emarketing-0-0-0-10-0-0-85-220.png/1200x630wa.png',
'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/15/86/18/158618f0-e78f-c1ed-efa8-51fe5c7e86b5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/13/b9/6a/13b96a41-71c5-35f7-d54f-a25b5bc583c8/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png',
//'https://www.imagensempng.com.br/wp-content/uploads/2021/10/Logo-Apple-Tv-Png-1024x1024.png',
'https://www.thetechedvocate.org/wp-content/uploads/2023/05/google-play.png']


const CarouselCover = () => {
  
  let [loading,setLoading] = useState(false)
 
  return (
    <>
    <div className="carousel-container">

    <Carousel
    images={img}
    isLoading={loading}
    imagePerSlide={3}
    imageLimit={3}
    // customPrevButton={}
    //customNextButton={}
    />

    </div>
   
    </>

  );
};

export default CarouselCover;
