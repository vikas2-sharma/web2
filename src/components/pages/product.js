import React, { Suspense, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../misc/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { WishListContext } from "../../misc/reducer/provider";

function Product(props) {
  const params = useParams();
  const { state, addToCart, removeFromCart } = useContext(WishListContext);
  const { id } = params;
  const product = getProductDetails(id);
  const [wishSelected, setWishSelected] = useState("");

  const onWishClick = () => {
    setWishSelected(wishSelected === "" ? "selected" : "");
    if (wishSelected === "") {
      addToCart(id);
    } else {
      removeFromCart(id);
    }
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const { wishList } = state;
    if (wishList.indexOf(id) != -1) {
      setWishSelected(wishSelected === "" ? "selected" : "");
    }
  }, []);

  return (
    <div className="product-page">
      {/* <div>{JSON.stringify(product)}</div> */}
      <div className="product-image">{<img src={product.imageId} />}</div>
      <div className="details">
        <div className="name">
          <h4>{product.name}</h4>
          <h3>{`₹ ${product.price}`}</h3>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <div className="buttons">
          <div onClick={onWishClick} className={wishSelected}>
            <FontAwesomeIcon icon={faHeartSolid} />
          </div>
          <div>
            Add to
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
          </div>
          <div>buy now</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
