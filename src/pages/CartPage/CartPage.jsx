import { Container } from "@mui/material";
import { Cart, OrderForm } from "components";
import React from "react";
import { css } from "pages/CartPage/cssCartPage";

export default function CartPage() {
  return (
    <Container sx={css.mainBox} variant="main">
      <OrderForm></OrderForm>
      <Cart></Cart>
    </Container>
  );
}
