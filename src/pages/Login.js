import React, {useState} from 'react';
import { Container, Box, Paper, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import LockIcon from '@mui/icons-material/Lock';
 
const Login = () => {
    const[data, setData] = useState({email:"", password:""})
    const [error, setError] = useState({email:"", password:""})

    function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    }

  const handleData = (event) => {
    if(event.target.name === "email"){
        if(!event.target.value){
           setError({...error, email:'This field is required.', password:""})
        }
        else if(event.target.value && !isValidEmail(event.target.value) ){
           setError({...error, email:'Email is invalid.'})
        }
        else{
           setData({...data, email:event.target.value})
           setError({...error, email:''})
        }
    }
    else if(event.target.name === "password"){
        if(!event.target.value){
        setError({...error, password:'This field is required.'})
        }
        else{
        setData({...data, password:event.target.value})
        setError({...error, password:''})
        }  
    }
  }

   return (
      <Container className="container">
         <Box className="subContainer">
            <Box className="mainBox">
               <Box className= "signupImage">
                  <Avatar className="signupLogo">
                     <LockIcon />
                  </Avatar>
               </Box>
               <Box className="SignupContain">
                  <Typography>LOGIN</Typography>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Email</Typography>
                  <Box className="inputStyle">
                    <TextField id="outlined-search" label="Email" name="email" onChange={(e) => handleData(e)}/>
                    <Typography className="errorStyle">{error.email}</Typography>
                  </Box>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Password</Typography>
                  <Box className="inputStyle">
                    <TextField id="outlined-search" label="Password" name="password" type="password" onChange={(e) => handleData(e)} />
                    <Typography className="errorStyle">{error.password}</Typography>
                  </Box>
               </Box>
               <Box className="submitBtn">
               <Button variant="contained" className="SignupContain">Login</Button>
               </Box>
               <Box className="noAccount">
               <Typography className="memberText">Don't have an Account?</Typography>
               <Link to="/signup" className="signupLink"><Typography className="signupLink">Signup Here</Typography></Link>
               </Box>
            </Box>
         </Box>
      </Container>
   )   
}
export default Login;