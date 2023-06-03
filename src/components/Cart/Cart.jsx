import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "redux/cart/cartSelectors";
import { delGoodFromCart, updateAmount } from "redux/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleDelete = (id) => {
    dispatch(delGoodFromCart(id))
  };

  const handleIncreaseAmount = good => {
    const newAmount = good.amount + 1
    dispatch(updateAmount({id: good.id, newAmount}))
  }

  return (
    <Box>
      {cart.length === 0 ? (
        <Typography>Your cart is empty. Add some goods to deliver!</Typography>
      ) : (
        cart.map((good) => (
          <Box key={good._id} sx={{ border: "1px solid black", p: 1, m: 1 }}>
            <Typography variant="h6">{good.productName}</Typography>
            <Typography >{good.amount} </Typography>
            <Button onClick={() => handleIncreaseAmount(good)}>+1</Button>
            <Button onClick={() => handleDelete(good._id)}>Del</Button>
          </Box>
        ))
      )}
    </Box>
  );
}
