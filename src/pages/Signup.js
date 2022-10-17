import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Signup = () => {

   const[data, setData] = useState({name:"", email:"", phone:"", password:""})
   const [error, setError] = useState({name:"", email:"", phone:"", password:""})

   function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

   const handleData = (event) => {
      if(event.target.name === "username"){
         if(!event.target.value){
            setError({...error, name:'This field is required.'})
         }
         else{
            setData({...data, name:event.target.value})
            setError({...error, name:''})
         }
         
      }
      else if(event.target.name === "email"){
         if(!event.target.value){
            setError({...error, email:'This field is required.'})
         }
         else if(event.target.value && !isValidEmail(event.target.value) ){
            setError({...error, email:'Email is invalid.'})
         }
         else{
            setData({...data, email:event.target.value})
            setError({...error, email:''})
         }
      }
      else if(event.target.name === "phone"){
         if(!event.target.value){
            setError({...error, phone:'This field is required.'})
         }
         else if(event.target.value.length > 10 || event.target.value.length < 10){
            setError({...error, phone:'Phone should contain only 10 numbers'})
         }
         else{
            setData({...data, phone:event.target.value})
            setError({...error, phone:''})
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
   const handleSubmit = () => {
      return data;
   }

   return (
      <Container className="container">
         <Box className="subContainer">
            <Box className="mainBox">
               <Box className= "signupImage">
                  <Avatar className="signupLogo">
                     <AssignmentIndIcon />
                  </Avatar>
               </Box>
               <Box className="SignupContain">
                  <Typography>SIGN UP</Typography>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Name</Typography>
                  <Box className="inputStyle">
                     <TextField id="outlined-search" name="username" label="Name" onChange={(e) => handleData(e)} />
                     <Typography className="errorStyle">{error.name}</Typography>
                  </Box>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Email</Typography>
                  <Box className="inputStyle">
                     <TextField id="outlined-search" name="email" label="Email" onChange={(e) => handleData(e)} />
                     <Typography className="errorStyle">{error.email}</Typography>
                  </Box>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Phone</Typography>
                  <Box className="inputStyle">
                     <TextField id="outlined-search" name="phone" label="Phone" type="number" onChange={(e) => handleData(e)} />
                     <Typography className="errorStyle">{error.phone}</Typography>
                  </Box>
               </Box>
               <Box className="signupDetail">
                  <Typography className="textStyle">Password</Typography>
                  <Box className="inputStyle">
                     <TextField id="outlined-search" name="password" label="Password" type="password" onChange={(e) => handleData(e)} />
                     <Typography className="errorStyle">{error.password}</Typography>
                  </Box>
               </Box>
               <Box className="submitBtn">
               <Link className="submitButton" to="/home"><Button variant="contained" className="SignupContain" onClick={() => handleSubmit()}>Sign Up</Button></Link>
               </Box>
               <Box className="noAccount">
               <Typography className="memberText">Already have an Account?</Typography>
               <Link to="/" className="signupLink"><Typography className="signupLink">Login Here</Typography></Link>
               </Box>
            </Box>
         </Box>
      </Container>
   )
    
}
export default Signup;