"use client"


import {useRecoilValue} from 'recoil';
import  {movies,moviesData} from '../utilites/atoms/moviesData'
import Movie from  './Movie'
import { Box } from '@mui/material';


let MovieList = ()=>
    {

let movieList:movies[] = useRecoilValue(moviesData);
console.log(`the value of movies is`,movieList);


return (<>
<Box sx={{
    display:'grid',
    gap:'0.5em',
    gridTemplateColumns:'repeat(6,1fr)'
}}>
{movieList ? (movieList.map(movie=>{

return <Movie items = {movie}/>

})):
(<h3>Loading...</h3>)}
</Box>



</>


  


 
)
}


export default MovieList