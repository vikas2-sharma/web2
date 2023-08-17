import React from "react";
import "./product-card.css";
function ProductCard({ title = "sample title", image, price }) {
  console.log(price);
  return (
    <div className="card-container">
      <div class="card-cursor">
        <div className="card-image">
          <img src={image} />
        </div>
        <div className="card-label">
          <div className="card-title">
            <h5>{title}</h5>
            <p style={{ whiteSpace: "nowrap" }}>{`₹ ${price}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
