import { Container } from "@mui/material";
import { HistoryForm, HistoryList } from "components";
import React from "react";
import { css } from "./cssHistoryPage";

export default function HistoryPage() {
  return (
    <Container sx={css.mainBox} variant="main">
      <HistoryForm />
      <HistoryList />
    </Container>
  );
}
