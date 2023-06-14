import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
import { BiArrowFromLeft } from 'react-icons/bi'

const Home = () => {
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "rgb(231, 124, 188)", display: "flex", justifyContent: "space-between" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography sx={{ display: "flex", alignItems: "center", fontSize: 80, gap: 2 }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg" style={{ width: 80, objectFit: "cover" }} />
              Bakery Shop
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className='bg'>
        <h1>Get Started <BiArrowFromLeft /><br /> And Order Your First Cake</h1>
      </div>
    </Box>
  )
}

export default Home