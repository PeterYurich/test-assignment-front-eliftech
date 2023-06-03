import { Container } from "@mui/material";
import { GoodsList, ShopsList } from "components";
import React from "react";
import { css } from "./cssShopPage";

export default function ShopPage() {
  return (
    <Container variant="main">
      <Container sx={css.mainBox}>
        <ShopsList />
        <GoodsList />
      </Container>
    </Container>
  );
}
