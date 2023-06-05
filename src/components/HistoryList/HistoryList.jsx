import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { LoaderBallTriangle } from "components";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoadingHistory,
  selectHistory,
} from "redux/history/historySelectors";
import { css } from "pages/HistoryPage/cssHistoryPage";
import separateThousands from "utils/separateThousands";

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
            orderHistory.map((order) => (
              <Card sx={css.historyCard} key={order._id}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="h5"
                    >
                      {`Data: ${order.createdAt}`}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {`${separateThousands(order.price)} coins`}
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    Amount
                    {order.order.map((good) => (
                      <Typography>{good.amount}</Typography>
                    ))}
                  </Box>

                </Box>
              </Card>
            ))}
        </List>
      )}
    </Box>
  );
}
