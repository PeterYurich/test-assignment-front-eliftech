import { Container } from "@mui/material";
import { GoodsList, ScrollUpBtn, ShopsList } from "components";
import React from "react";
import { css } from "./cssShopPage";

export default function ShopPage() {
  return (
    <Container variant="main">
      <Container sx={css.mainBox}>
        <ShopsList />
        <GoodsList />
      </Container>
      <ScrollUpBtn />
    </Container>
  );
}
