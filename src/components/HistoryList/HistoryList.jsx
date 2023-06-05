import {
  Box,
  Card,
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
import { css } from "./cssHistoryList";
import separateThousands from "utils/separateThousands";
import {
  countGoodTotalPrice,
  countOrderTotalPrice,
} from "utils/countTotalPrice";

export default function HistoryList() {
  const orderHistory = useSelector(selectHistory);
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
                <ListItem>
                  <Card sx={css.historyCard} key={item._id}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{ textTransform: "capitalize" }}
                        variant="h5"
                      >
                        {`order price: ${separateThousands(
                          countOrderTotalPrice(item.order)
                        )} coins`}
                      </Typography>

                      <Box className="rowFlex" sx={{ gap: 0 }}>
                        <Box className="columnFlex" sx={{ gap: 0, p: 1 }}>
                          <Typography variant="h6">Good:</Typography>
                          {item.order.map((good) => (
                            <Typography sx={{ textTransform: "capitalize" }}>
                              {good.productName}
                            </Typography>
                          ))}
                        </Box>

                        <Box className="columnFlex" sx={{ gap: 0, p: 1 }}>
                          <Typography variant="h6">Price:</Typography>
                          {item.order.map((good) => (
                            <Typography>{`${separateThousands(
                              good.price
                            )}`}</Typography>
                          ))}
                        </Box>

                        <Box className="columnFlex" sx={{ gap: 0, p: 1 }}>
                          <Typography variant="h6">Amount:</Typography>
                          {item.order.map((good) => (
                            <Typography>{good.amount}</Typography>
                          ))}
                        </Box>

                        <Box className="columnFlex" sx={{ gap: 0, p: 1 }}>
                          <Typography variant="h6">Total:</Typography>
                          {item.order.map((good) => (
                            <Typography>{`${separateThousands(
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
