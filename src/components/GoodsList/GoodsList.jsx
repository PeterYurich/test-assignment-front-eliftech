import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { css } from "./cssGoodsList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentShop,
  selectGoodsList,
  selectIsLoadingGoods,
} from "redux/goods/goodsSelectors";
import { LoaderBallTriangle } from "components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { selectCart } from "redux/cart/cartSelectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addGoodToCart,
  addShopForOrder,
  delShopForOrder,
} from "redux/cart/cartSlice";
import separateThousands from "utils/separateThousands";

export default function GoodsList() {
  const isLoading = useSelector(selectIsLoadingGoods);
  const goodsList = useSelector(selectGoodsList);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const currentShop = useSelector(selectCurrentShop);

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(delShopForOrder());
    }
  }, [cart, dispatch]);

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
    dispatch(addShopForOrder(currentShop));

    toast.success(
      `Chosen ${good.productName} is successfully added to the cart!`
    );
  };

  return (
    <Box sx={css.mainBox}>
      <Grid
        component="ul"
        container
        spacing={4}
        sx={{
          pb: 6,
        }}
      >
        {isLoading ? (
          <Box sx={css.flexCenter}>
            <LoaderBallTriangle />
          </Box>
        ) : goodsList.length < 1 ? (
          <Box sx={css.flexCenter}>
            <Typography>Choose a shop to deliver from!</Typography>
          </Box>
        ) : (
          goodsList.map((good) => (
            <Grid
              component="li"
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
                    {`${separateThousands(good.price)} coins`}
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
          ))
        )}
      </Grid>

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
