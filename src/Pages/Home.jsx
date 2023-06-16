import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material'
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
      <div className="bg">
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://st4.depositphotos.com/10614052/25239/i/600/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Chocolate Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Vanilla Cake"
              height="140"
              image="https://faridabadcake.com/wp-content/uploads/2023/03/luscious-choco-vanilla-cake.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Vanilla Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Pineapple Cake"
              height="140"
              image="https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-pineapple-cake-with-cherry-toppings-half-kg--16988-m.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Pineapple Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://justbakedcake.com/wp-content/uploads/2020/09/strawberry-gateaux-1.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Strawberry Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Black Forest Cake"
              height="140"
              image="https://www.fnp.com/images/pr/l/v20221205202048/black-forest-cake-half-kg_1.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Black Forest
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Red Velvet Cake"
              height="140"
              image="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake1.jpg?v=1632141306"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Red Velvet
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Layered Cake"
              height="140"
              image="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/002/395/546/new_medium/_Duchess_Cakes_and_Bakes.jpg?1613992721"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Layered Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Image Cake"
              height="140"
              image="https://www.thecake.in/image/cache/catalog/cake/images%20(1)-500x500.jpeg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Image Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ border: "0.5px solid Black", color: "text.secondary", padding: "5px" }}>Add To Cart</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Mirror Cake"
              height="140"
              image="https://www.bakehoney.com/media/27465/conversions/29587_09-20-2022_18-20-24_name_0000Mirror-Cake-is-a-perfect-Selfie-Cake--available-in-all-over-noida-sector-48-UP-banner.jpg"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ margin: 0.5 }}>
                Mirror Cake
              </Typography>
              <Typography variant="body2" color="text.secondary">

                Indulge in a mesmerizing cake adorned with delightful swirls of frosting. Its aroma tantalizes, while each moist bite delivers pure bliss. With luxurious layers and a heavenly frosting, this cake is an irresistible treat for all your senses.
              </Typography>
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