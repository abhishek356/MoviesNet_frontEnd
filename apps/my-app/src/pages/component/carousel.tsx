"use client"

import { useEffect, useRef, useState } from "react"
import '../../styles/carousel.css'
import { OttImage } from "@/utilites/ott"

let images:string[]=[]

const Carousel:React.FC<OttImage> = ({images,isLoading=false,imagePerSlide=3,
    imageLimit=3, 
})=>{

   let [currentIndex,setCurrentIndex] = useState(0)
   let [imgWidth,setImgWidth] = useState<number>(48)
    console.log(currentIndex)
    let imgRef = useRef<HTMLImageElement>(null)

   console.log(imgRef?.current?.offsetWidth)
useEffect(()=>{

    if(images.length>0)
    {
        setCurrentIndex(0)
    }

},[images])


  let goToPrev = ()=>{

    setCurrentIndex(
        prevIndex => prevIndex == 0 ? imageLimit-2:prevIndex-1)

  };
  let goToNext = ()=>{

    setCurrentIndex(prevIndex => prevIndex == imageLimit-2? 0: prevIndex+1)

  };

    console.log(images)
    return  (<>


    {!images ? <div> Loading .. </div>:<div className="carousel" style={{width:`${imagePerSlide*150}px`}}>
        <div className="image-container" style={{
            transform : `translate(-${currentIndex*imgWidth}px)`,
            marginBottom:'30em'
        }}>
            {images.slice(0,imageLimit>images.length ? images.length:imageLimit).map((image,index)=>{
                   
                 //  console.log(`inside image array`,image)
                   
                   return <img 
                                ref={imgRef}
                                onLoad={()=>setImgWidth(
                                150 )}
                                key={index}
                                src={image}
                               style={{
                                 width:'150px',
                                height:'75px',
                                marginLeft:'18px',
                                padding:'0'
                            
                               }}
                                alt="app"
                                 className="image"
                                />
            })}
        </div>
        <button className="btn prev" onClick = {goToPrev}><code></code>&lt;</button>
        <button className="btn next" onClick = {goToNext}> <code></code>&gt;</button>
    </div>}

    </>)
}

export default Carousel;