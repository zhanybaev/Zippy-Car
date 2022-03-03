import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';

const EditProduct = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const { getProductDetails, productDetails, saveEditedProduct } = useProducts();
    const [ data ] = productDetails

    const [product, setProduct] = useState(data);

    const handleInput = (e, product, setProduct) => {
        let obj = {
            ...product,
            [e.target.name]: e.target.value,
        };
        setProduct(obj);
    };

    useEffect(() => {
        getProductDetails(id);
    }, []);

    useEffect(() => {
    setProduct(data);
    }, [data]);

    return (
    <div>
        <Box sx={{ bgcolor: '#ffe0b2', height: '100vh', padding: '20vh auto' }}>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                margin: '10vh auto',
                boxShadow: 3,
                borderRadius: 3,
                bgcolor: '#ffcc80',
                }}
            >
          <form>
            <TextField
              value={product.title}
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.model}
              fullWidth
              id="outlined-basic"
              label="Model"
              variant="outlined"
              name="model"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{' '}
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{' '}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="Price"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{' '}
            <TextField
              value={product.year}
              fullWidth
              id="outlined-basic"
              label="Year"
              variant="outlined"
              name="year"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{' '}
            <TextField
              value={product.img}
              fullWidth
              id="outlined-basic"
              label="Image"
              variant="outlined"
              name="img"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="Type"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: '#880e4f' }}>
              <Button
                id="button"
                sx={{
                  bgcolor: '#263238',
                  borderColor: 'error.main',
                  fontFamily: 'Monospace',
                }}
                color="error"
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);
                  navigate('/products');
                }}
              >
                EDIT PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
