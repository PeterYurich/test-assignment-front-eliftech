import { Box, Card, List, ListItem, Typography } from "@mui/material";
import { LoaderBallTriangle } from "components";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoadingHistory,
  selectHistory,
} from "redux/history/historySelectors";
import { css } from "./cssHistoryList";
import separateThousands from "utils/separateThousands";
import {
  countGoodTotalPrice,
  countOrderTotalPrice,
} from "utils/countTotalPrice";
import { parseDate } from "utils/parseDate";

export default function HistoryList() {
  const orderHistory = useSelector(selectHistory);
  console.log("orderHistory: ", orderHistory);
  const isLoading = useSelector(selectIsLoadingHistory);


  return (
    <Box>
      {isLoading ? (
        <LoaderBallTriangle></LoaderBallTriangle>
      ) : (
        <div>
          {orderHistory.length > 0 && (
            <List>
              {orderHistory.map((item) => (
                <ListItem key={item._id}>
                  <Card sx={css.historyCard}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h5">
                        {`Date: ${parseDate(item.createdAt)}`}
                      </Typography>
                      <Typography variant="h5">
                        {`Order price: ${separateThousands(
                          countOrderTotalPrice(item.order)
                        )} coins`}
                      </Typography>

                      <Box className="rowFlex" sx={{ gap: 0 }}>
                        <Box sx={css.tableColumn}>
                          <Typography variant="h6">Good:</Typography>
                          {item.order.map((good) => (
                            <Typography
                              sx={{ textTransform: "capitalize" }}
                              key={good._id}
                            >
                              {good.productName}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={css.tableColumn}>
                          <Typography variant="h6">Price:</Typography>
                          {item.order.map((good) => (
                            <Typography key={good._id}>{`${separateThousands(
                              good.price
                            )}`}</Typography>
                          ))}
                        </Box>

                        <Box sx={css.tableColumn}>
                          <Typography variant="h6">Amount:</Typography>
                          {item.order.map((good) => (
                            <Typography key={good._id}>
                              {good.amount}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={css.tableColumn}>
                          <Typography variant="h6">Total:</Typography>
                          {item.order.map((good) => (
                            <Typography key={good._id}>{`${separateThousands(
                              countGoodTotalPrice(good)
                            )}`}</Typography>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </ListItem>
              ))}
            </List>
          )}
        </div>
      )}
    </Box>
  );
}
