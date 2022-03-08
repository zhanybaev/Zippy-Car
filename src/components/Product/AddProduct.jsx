import React, { useState } from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';


const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: '',
    img: '',
    model:'',
    description: '',
    price: 0,
    type: '',
    year: 0
  });

  const handleInp = (e) => {
      if (e.target.name === 'price' && e.target.name === 'year' ) {
        let obj = {
          ...product,
          [e.target.name]: +(e.target.value),
        };
  
        setProduct(obj);
      } else {
        let obj = {
          ...product,
          [e.target.name]: e.target.value,
        };
  
        setProduct(obj);
      }
  };

    return (
        <Box sx={{bgcolor:"#ffe0b2", height:"100vh",padding:"20vh auto"}} >
      <center variant="h6" gutterBottom >
        <h2 sx={{fontFamily: 'Monospace'}}>
        WELCOME, ADMIN! 
        </h2>
        <h3 >Let's add a new car!</h3>
        
      </center>

      <Grid  item xs={12} md={6} sx={{ margin: '10vh auto',boxShadow: 3,borderRadius: 3, bgcolor:"#ffcc80"}} >
        <form>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Model"
            variant="outlined"
            name="model"
            onChange={handleInp}

          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            onChange={handleInp}
          />{' '}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            onChange={handleInp}
          />{' '}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Year"
            variant="outlined"
            name="year"
            onChange={handleInp}
          />{' '}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Image"
            variant="outlined"
            name="img"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Type"
            variant="outlined"
            name="type"
            onChange={handleInp}

          />

          <Stack direction="row" spacing={2} sx={{bgcolor:"#880e4f"}}>
           
      
            <Button id="button" sx={{bgcolor:"#263238",borderColor: 'error.main',fontFamily: 'Monospace'}} variant="outlined" color="error" size="large" fullWidth onClick={() => {

              addProduct(product);
              
              navigate('/products');
              
            }}>
              CREATE PRODUCT
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
    );
};

export default AddProduct;