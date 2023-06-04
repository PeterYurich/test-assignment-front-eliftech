import { Box, Container } from "@mui/material";
import { Cart, OrderForm, TotalPrice } from "components";
import React from "react";
import { css } from "pages/CartPage/cssCartPage";
import { useSelector } from "react-redux";
import { selectCart } from "redux/cart/cartSelectors";

export default function CartPage() {
  const cart = useSelector(selectCart);

  return (
    <Container sx={css.mainBox} variant="main">
      <Box sx={css.flexColumn}>
        <OrderForm></OrderForm>
        {cart.length > 0 && <TotalPrice></TotalPrice>}
      </Box>
      <Cart></Cart>
    </Container>
  );
}
