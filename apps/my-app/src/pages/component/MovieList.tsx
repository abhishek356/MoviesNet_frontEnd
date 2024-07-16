"use client"


import {useRecoilValue} from 'recoil';
import  {movies,moviesData} from '../../utilites/moviesData'
import Movie from  './Movie'
import { Box } from '@mui/material';


let MovieList = ()=>
    {

let movieList:movies[] = useRecoilValue(moviesData);
console.log(`the value of movies is`,movieList);


return (<>
<Box sx={{
    display:'grid',
    gap:'0.7em',
    columnGap:'1em',
    //gridTemplateColumns:'repeat(6,1fr)'
    gridTemplateColumns:'repeat(auto-fit,minmax(11rem,1fr))'

}}>
{movieList ? (movieList.map(movie=>{
//console.log(`inside the movieList  array `,movie)
return <Movie props = {movie} />

})):
(<h3>Loading...</h3>)}
</Box>



</>


  


 
)
}


export default MovieList