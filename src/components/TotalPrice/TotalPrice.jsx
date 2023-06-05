import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "redux/cart/cartSelectors";
import separateThousands from "utils/separateThousands";
import { countOrderTotalPrice } from "utils/countTotalPrice";

export default function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState();
  const cart = useSelector(selectCart);

  useEffect(() => {
    if (cart.length > 0) {

    const sum = countOrderTotalPrice(cart)
      setTotalPrice(sum);
    }
  }, [cart]);

  return <Typography>{`Total price: ${separateThousands(totalPrice)} coins`}</Typography>;
}
