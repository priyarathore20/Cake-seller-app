import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "rgb(231, 124, 188)", display: "flex", justifyContent: "space-between" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography sx={{ display: "flex", alignItems: "center", fontSize: 80, gap: 2 }}>
              <img alt='Logo'
                src="https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg" style={{ width: 80, objectFit: "cover" }} />
              Bakery Shop
            </Typography>
            <Button href='/signup' sx={{ border: "2px solid white", color: "white", margin: "5px" }}>Signup</Button>
            <Button href='/login' sx={{ border: "2px solid white", color: "white", margin: "5px" }}>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="bg">
        <div className="cards">
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Chocolate Cake"
              height="350"
              image="https://st4.depositphotos.com/10614052/25239/i/600/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Chocolate Cake
              </Typography>
              <Typography>Rs. 250</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Vanilla Cake"
              height="350"
              image="https://faridabadcake.com/wp-content/uploads/2023/03/luscious-choco-vanilla-cake.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Vanilla Cake
              </Typography>
              <Typography>Rs. 300</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Pineapple Cake"
              height="350"
              image="https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-pineapple-cake-with-cherry-toppings-half-kg--16988-m.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Pineapple Cake
              </Typography>
              <Typography>Rs. 350</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              image="https://justbakedcake.com/wp-content/uploads/2020/09/strawberry-gateaux-1.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Strawberry Cake
              </Typography>
              <Typography>Rs. 400</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Black Forest Cake"
              height="350"
              image="https://www.fnp.com/images/pr/l/v20221205202048/black-forest-cake-half-kg_1.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Black Forest
              </Typography>
              <Typography>Rs. 450</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Red Velvet Cake"
              height="350"
              image="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake1.jpg?v=1632141306"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Red Velvet
              </Typography>
              <Typography>Rs. 500</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Layered Cake"
              height="350"
              image="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/002/395/546/new_medium/_Duchess_Cakes_and_Bakes.jpg?1613992721"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Layered Cake
              </Typography>
              <Typography>Rs. 550</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Image Cake"
              height="350"
              image="https://www.thecake.in/image/cache/catalog/cake/images%20(1)-500x500.jpeg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Image Cake
              </Typography>
              <Typography>Rs. 600</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1.5 }}>
            <CardMedia
              component="img"
              alt="Mirror Cake"
              height="350"
              image="https://sandradillondesign.com.au/wp-content/uploads/2023/02/Selfie-Cake-Mirror-Board-Heart-Pink-EWB-500x500.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Mirror Cake
              </Typography>
              <Typography>Rs. 650</Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting.               </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Box>
  )
}

export default Home