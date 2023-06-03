import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "./cssHeader";

export default function Header() {
  const navigate = useNavigate();
  const { currentShop } = useParams();
  console.log('currentShop: ', currentShop);

  const onClick = (e) => {
    const { name } = e.target;
    navigate(`/${name}`);
  };

  return (
    <Container sx={css.navContainer}>
      <Typography sx={css.slogan} variant="h6">
        We will, we will feed you!
      </Typography>
      <Box>
        <Button
          variant="contained"
          sx={css.navLink}
          onClick={onClick}
          name="shop"
        >
          Shop
        </Button>
        <Button
          variant="contained"
          sx={css.navLink}
          onClick={onClick}
          name="cart"
        >
          Shopping Cart
        </Button>
      </Box>
    </Container>
  );
}
