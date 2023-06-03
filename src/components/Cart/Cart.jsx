import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "redux/cart/cartSelectors";
import { delGoodFromCart, updateAmount } from "redux/cart/cartSlice";
import { css } from "./cssCart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from '@mui/icons-material/Clear';
import separateThousands from "utils/separateThousands";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleDelete = (id) => {
    dispatch(delGoodFromCart(id));
  };

  const handleIncreaseAmount = (good) => {
    const newAmount = good.amount + 1;
    dispatch(updateAmount({ id: good._id, newAmount }));
  };

  const handleDecreaseAmount = (good) => {
    if (good.amount === 1) {
      return;
    }
    const newAmount = good.amount - 1;
    dispatch(updateAmount({ id: good._id, newAmount }));
  };

  return (
    <Box sx={css.mainBox}>
      {cart.length === 0 ? (
          <Box sx={css.flexCenter}>
          <Typography>Your cart is empty. Add some goods to deliver!</Typography>
          </Box>
      ) : (
        cart.map((good) => (
          <Card sx={css.cartCard} key={good._id}>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={good.pictureUrl}
              alt={good.productName}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography sx={{textTransform: 'capitalize', }} variant="h5">
                  {good.productName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {`${separateThousands(good.price)} coins`}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton onClick={() => handleDecreaseAmount(good)}>
                  <RemoveCircleIcon />
                </IconButton>
                <Typography>{good.amount}</Typography>
                <IconButton onClick={() => handleIncreaseAmount(good)}>
                  <AddCircleIcon />
                </IconButton>
              </Box>
            </Box>
            <IconButton onClick={() => handleDelete(good._id)}
            size="large" sx={{m:2}}
            >
              <ClearIcon sx={{width: 60, height: 60}}/>
            </IconButton>
          </Card>
        ))
      )}
    </Box>
  );
}
