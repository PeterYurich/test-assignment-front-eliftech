import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { css } from "./cssGoodsList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGoodsList,
  selectIsLoadingGoods,
} from "redux/goods/goodsSelectors";
import { LoaderBallTriangle } from "components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// import { addGoodToCart } from "redux/cart/cartOperations";

import { selectCart } from "redux/cart/cartSelectors";
import { Notify } from "notiflix";
import { addGoodToCart } from "redux/cart/cartSlice";

export default function GoodsList() {
  const isLoading = useSelector(selectIsLoadingGoods);
  const goodsList = useSelector(selectGoodsList);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleAddToCart = (good) => {
    const addedGood = cart.find((item) => item._id === good._id);
    if (addedGood) {
      Notify.info(
        `You've already added ${good.productName} in your cart. Thank you for you choice!`
      );
      return;
    }
    dispatch(addGoodToCart({...good, amount: 1}));
    Notify.success(`Chosen ${good.productName} is added to the cart`);
  };

  return (
    <List sx={css.goodListBox}>
      {isLoading ? (
        <LoaderBallTriangle />
      ) : (
        goodsList.length > 0 &&
        goodsList.map((good) => (
          <ListItem key={good._id}>
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              /> */}
              <CardContent>
                <Typography
                  sx={css.goodName}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {`${good.productName}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${good.price} coins`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="text"
                  size="small"
                  onClick={() => handleAddToCart(good)}
                >
                  <AddShoppingCartIcon />
                  Add to cart
                </Button>
                {/* <Button variant="text" size="small">
                  <RemoveShoppingCartIcon />
                  Delete from cart
                </Button> */}
              </CardActions>
            </Card>
          </ListItem>
        ))
      )}
    </List>
  );
}
