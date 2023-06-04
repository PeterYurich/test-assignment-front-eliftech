import { Box, List, ListItem } from "@mui/material";
import { LoaderBallTriangle } from "components";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoadingHistory,
  selectHistory,
} from "redux/history/historySelectors";

export default function HistoryList() {
  const orderHistory = useSelector(selectHistory);
  const isLoading = useSelector(selectIsLoadingHistory);

  return (
    <Box>
      {isLoading ? (
        <LoaderBallTriangle></LoaderBallTriangle>
      ) : (
        <List>
          {orderHistory.length > 0 &&
            orderHistory.map((order) => <ListItem key={order._id}>
                {`Order id: ${order._id}`}</ListItem>)
                }
        </List>
      )}
    </Box>
  );
}
