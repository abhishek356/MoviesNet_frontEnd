"use client";
import {AppBar,Box,Link, Typography,Button,Toolbar, Container} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/SearchSharp';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
   // width:'20rem',
    //transition: 'width 0.25s linear 1s'
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20rem',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'none'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


let Navbar = ()=>{

return (
    <>
    <Container>
    <Box sx={{ flexGrow: 1 ,
     // marginTop:'5.1rem'
   }}>
      <AppBar position="fixed" sx={{
                
      //  boxShadow:'',
        
        backgroundColor:'rgba(0,0,0,0)',
        border:'none',
        borderBottom: '0',
        boxShadow:'none',
        marginTop:'2.1rem'

      }}>
      
  <Toolbar>
    <Box style={{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flex:'1'
    }}>


        <Box
           style={{
            // border:'1px solid',
            // borderColor:'black',
            width:'30%',
            display:'flex',
            //justifyContent:'space-between',
            alignItems:'center',
            gap:'2em'
          }}>
            <Typography variant={'h5'} sx={{
              // border:'1px solid',
              // borderColor:'black',
              fontSize:'2.0rem',
              color:'#f8da5b'
            }}>MoviesNet</Typography>


            <Link component="button" 
            sx={{
           //   border:'1px solid',
             // borderColor:'black',
              color:'#dbd8e3',
              fontSize:'1.3rem',

            }} 
            
            onClick={()=>{alert('Home')}}

            underline={'none'}

            >Home</Link>

            
            <Link component='button' sx={{
              //  border:'1px solid',
              //  borderColor:'black',
               color:'#dbd8e3',
               fontSize:'1.3rem',

              }}
              
              underline={'none'}
              >New</Link>

            <Link component='button' sx={{
              //  border:'1px solid',
              //  borderColor:'black',
               color:'#dbd8e3',
               fontSize:'1.3rem',

               
              }}
              underline={'none'}
>Popular</Link>

          
        </Box>



        <Box sx={{
          // border:'1px solid',
          // borderColor:'black',
          width:"45%",
          display:'flex',
          justifyContent:"space-between",
          alignItems:'center',
          gap:'2em'
        }}>
          {/* <Typography 
          sx={{
            color:'black'
          }}>RightSide</Typography> */}

          <Box sx={{

// border:'1px solid',
// borderColor:'black',
// color:'black',
//flexGrow:'1'

          }}>
            
            <Search sx={{
             // width:'5%',
              //height:'1rem',
              //backgroundColor:'white',
             // padding:'1.3rem',
              // color:'white',
              // borderColor:'black',
          //    border:'1px solid black',
        ////  htmlColor:'white'
            }}>
            <SearchIconWrapper sx={{
              htmlColor:'grey'
// border:'1px solid',
// borderColor:'black',
            }}>
              <SearchIcon htmlColor='white' sx={{
                //backgroundColor:'black',position:'absolute'
                }}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find movies, TV shows and more.."
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                
// border:'1px solid',
// borderColor:'black',
                // width:'80%',
                // height:'2rem',
                //marginLeft:'5rem'
               // color:'white'
             //  backgroundColor:'white'
              }}
            />
          </Search>
          </Box>

          <Box sx={{
            gap:'20px'
          }}>
              <Button variant={'contained'}
              size = {'large'}
              sx={{
                marginRight:'3px',
                color:'white',
                backgroundColor:'black',
                borderRadius:'0px',
                '&:hover': {
                  backgroundColor: 'white',
                  color:'black'
                },
                
              }}
              >
                Sign In
              </Button>

              <Button variant={'contained'}
              size ={'large'}
              sx={{
                color:'black',
                backgroundColor:'white',
                borderColor:'black solid',
                borderRadius:'0px',
                marginLeft:'5px',
                '&:hover': {
                  backgroundColor: 'black',
                  color:'white'
                },
              }}
              >
                Sign Up
              </Button>
          </Box>


        </Box>
    </Box>
  </Toolbar>
      </AppBar>
    </Box>
    </Container>
   
    </>

)
}

export default Navbar