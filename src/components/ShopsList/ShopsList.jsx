import { Button, List, ListItem, Typography } from "@mui/material";
import { LoaderBallTriangle } from "components";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getShops } from "redux/shops/shopsOperations";
import {
  selectIsLoadingShops,
  selectShopsList,
} from "redux/shops/shopsSelectors";
import { css } from "./cssShopList";
import { getGoods } from "redux/goods/goodsOperations";

export default function ShopsList() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoadingShops);
  const shopsList = useSelector(selectShopsList);

  const handleClick = (shopId) => {
    dispatch(getGoods(shopId));
  };

  return (
    <List sx={css.shopListBox}>
      {isLoading ? (
        <LoaderBallTriangle />
      ) : (
        shopsList.length > 0 && shopsList.map((shop) => (
          <ListItem key={shop._id}>
            <Button
              sx={css.shopBtn}
              variant="outlined"
              onClick={() => handleClick(shop._id)}
            >
              <Typography>{`${shop.shopName}`}</Typography>
            </Button>
          </ListItem>
        ))
      )}
    </List>
  );
}
