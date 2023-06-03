import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
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

import { selectCart } from "redux/cart/cartSelectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addGoodToCart } from "redux/cart/cartSlice";

export default function GoodsList() {
  const isLoading = useSelector(selectIsLoadingGoods);
  const goodsList = useSelector(selectGoodsList);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleAddToCart = (good) => {
    const addedGood = cart.find((item) => item._id === good._id);
    if (addedGood) {
      toast.info(
        `You've already added ${good.productName} in your cart. Thank you for you choice!`,
        {}
      );
      return;
    }
    dispatch(addGoodToCart({ ...good, amount: 1 }));
    toast.success(
      `Chosen ${good.productName} is successfully added to the cart!`
    );
  };

  return (
    <Box sx={css.mainBox}>
      {/* <List sx={css.goodListBox}> */}
      <Grid
        container
        spacing={4}
        sx={{
          pb: 6,
        }}
      >
        {goodsList.length === 0 && (
          <Typography>Choose a shop to deliver from!</Typography>
        )}
        {isLoading ? (
          <LoaderBallTriangle />
        ) : (
          goodsList.length > 0 &&
          goodsList.map((good) => (
            // <ListItem key={good._id} sx={css.goodCard}>
            <Grid
              item
              justifyContent="center"
              display="flex"
              xs={12}
              sm={12}
              md={3}
              lg={2}
              xl={2}
              key={good._id}
            >
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={good.pictureUrl}
                  title={good.productName}
                />
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
                </CardActions>
              </Card>
            </Grid>
            // </ListItem>
          ))
        )}
      </Grid>

      {/* </List> */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}
