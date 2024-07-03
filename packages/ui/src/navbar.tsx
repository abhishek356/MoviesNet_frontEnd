"use client";
import {AppBar,Box,Link, Typography,Button,Toolbar} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';





let Search = styled('div')(({theme})=>({

    position:'relative',
    borderRadius :theme.shape.borderRadius,
   // borderColor:'black',
   //backgroundColor:'rgba(0,0,0,0.4)',

    backgroundColor: alpha(theme.palette.common.white, 0.15),

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  
    marginLeft:'0',
    width:'100%',

    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },

}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    //Added below backgroundColor line
    backgroundColor:'rgba(0,0,0,0.4)',

    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingTop:'0.8em',
      paddingLeft: `calc(2em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '10ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));









let Navbar = ()=>{

return (
    <>
   <Box sx={{ flexGrow: 1 ,

   }}>
      <AppBar position="fixed" sx={{
                
      //  boxShadow:'',
        
        backgroundColor:'rgba(0,0,0,0.4)',
        borderColor:'black',
        borderBottom: '3px',

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
              color:'#f8da5b'
            }}>MoviesNet</Typography>


            <Link component="button" 
            sx={{
           //   border:'1px solid',
             // borderColor:'black',
              color:'#f8da5b'
            }} 
            
            onClick={()=>{alert('Home')}}

            underline={'none'}

            >Home</Link>

            
            <Link component='button' sx={{
              //  border:'1px solid',
              //  borderColor:'black',
               color:'#f8da5b'
              }}
              
              underline={'none'}
              >New</Link>

            <Link component='button' sx={{
              //  border:'1px solid',
              //  borderColor:'black',
               color:'#f8da5b'
               
              }}
              underline={'none'}
>Popular</Link>

          
        </Box>



        <Box sx={{
          // border:'1px solid',
          // borderColor:'black',
          width:"45%",
          display:'flex',
          justifyContent:"normal",
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
flexGrow:'2'

          }}>
            
            <Search sx={{
              width:'20%',
              height:'45px',
              backgroundColor:'white',
              color:'black',
              borderColor:'black',
              border:'1px solid'
            }}>
            <SearchIconWrapper sx={{
              
// border:'1px solid',
// borderColor:'black',
            }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find movies, TV shows and more.."
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                
// border:'1px solid',
// borderColor:'black',
              }}
            />
          </Search>
          </Box>

          <Box>
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
    </>

)
}

export default Navbar