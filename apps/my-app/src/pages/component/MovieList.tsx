"use client"


import {useRecoilValue} from 'recoil';
import  {movies,moviesData} from '../../utilites/moviesData'
import Movie from  './Movie'
import { Box, Grid, Typography } from '@mui/material';


let MovieList = ()=>
    {

let movieList:movies[] = useRecoilValue(moviesData);
console.log(`the value of movies is`,movieList);


return (<>
{/* <Box sx={{
    display:'grid',
    columnGap:'1em',
    //gridTemplateColumns:'repeat(6,1fr)'
    gap:'4px',

    gridTemplateColumns:'repeat(auto-fit,minmax(11rem,1fr))'

}}>
{movieList ? (movieList.map(movie=>{
//console.log(`inside the movieList  array `,movie)
return <Movie props = {movie} />

})):
(<h3>Loading...</h3>)}
</Box> */}


<Box sx={{

backgroundColor:'red'
}}>
  <Grid container direction='row' spacing={1}>

    
{!movieList ? (<h3>Loading...</h3>):(movieList.map(movie=>{

    return <Grid  item xs={2}>
        <Movie props = {movie}/>
    </Grid>

}))}



  </Grid>

</Box>



</>


  


 
)
}


export default MovieList