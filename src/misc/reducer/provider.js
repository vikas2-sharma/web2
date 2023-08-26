import React, { createContext, useReducer } from "react";
import { initWishList } from "./initState";
import { wishListReducer } from "./reducer";

export const WishListContext = createContext(initWishList);

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(wishListReducer, initWishList);
  const addToCart = (id) => {
    const updatedCount = state.wishListCount + 1;
    const updatedWishList = state.wishList.push(id);
    console.log("updatedCount", updatedCount);
    console.log("updatedWishList", updatedWishList);
    dispatch({
      type: "UPDATE_COUNT",
      payload: { wishListCount: updatedCount, wishList: updatedWishList },
    });
  };
  const removeFromCart = (id) => {
    const updatedCount = state.wishListCount > 0 ? state.wishListCount - 1 : 0;
    const updatedWishList = state.wishList.filter((itemId) => itemId != id);
    console.log("updatedCount", updatedCount);
    console.log("updatedWishList", updatedWishList);
    dispatch({
      type: "UPDATE_COUNT",
      payload: { wishListCount: updatedCount, wishList: updatedWishList },
    });
  };
  const value = { state, addToCart, removeFromCart };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
}

export default StateProvider;
