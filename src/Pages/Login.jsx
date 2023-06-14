import { AppBar, Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useFirebase } from '../Context/Firebase'

const LoginPage = () => {
  const firebase = useFirebase()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()


  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "rgb(231, 124, 188)", display: "flex", justifyContent: "space-between" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography sx={{ display: "flex", alignItems: "center", fontSize: 80, gap: 2 }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg" style={{ width: 80, objectFit: "cover" }} />
              Bakery Shop
              <Button sx={{ border: "solid", bgcolor: "rgb(231, 124, 188)", minWidth: "60px", color: 'white', fontSize: 20 }} >Sign Up</Button>
            </Typography>


          </Toolbar>
        </Container>
      </AppBar>

      <div className='login-page'>
        <h2 className='login-title' >Good to see you again !</h2>
        <label className='login-label'>Enter Email</label>
        <input className='login' type="email" onChange={e => setemail(email)} value={email} placeholder='Enter email here' /> <br />
        <label className='login-label'>Enter Password</label>
        <input className='login' type="password" placeholder='Password' onChange={e => setpassword(password)} value={password} />
        <button className='login-btn' onClick={firebase.signInUserWithEmailAndPassword}>Login</button>
      </div>
    </Box >
  )
}

export default LoginPage