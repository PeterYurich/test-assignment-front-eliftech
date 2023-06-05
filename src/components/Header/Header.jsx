import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { css } from "./cssHeader";
import { useTheme } from "@emotion/react";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {palette} = useTheme()

  const onClick = (e) => {
    const { name } = e.target;
    navigate(`/${name}`);
  };

  return (
    <Container sx={css.mainBox}>
      <Typography sx={css.slogan} variant="h6">
        We will, we will feed you!
      </Typography>
      <Box>
          <Button variant="contained" 
          sx={{...css.navLink, 
          backgroundColor: pathname === "/shop" && palette.primary.main
          }} name="shop"
          onClick={onClick}
          >
            Shop
          </Button>
          <Button
            variant="contained"
            sx={{...css.navLink, 
              backgroundColor: pathname === "/cart" && palette.primary.main
              }}
            onClick={onClick}
            name="cart"
          >
            Shopping Cart
          </Button>
        <Button
          variant="contained"
          sx={{...css.navLink, 
            backgroundColor: pathname === "/history" && palette.primary.main
            }}
          onClick={onClick}
          name="history"
        >
          order history
        </Button>
      </Box>
    </Container>
  );
}
