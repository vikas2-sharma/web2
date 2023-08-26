export const wishListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_COUNT":
      console.log("adding to cart");
      console.log("state:", state);
      console.log("Payload:", payload);
      return {
        ...state,
        wishListCount: payload.wishListCount,
      };
      break;
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};
