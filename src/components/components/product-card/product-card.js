import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
function ProductCard({ title = "sample title", image, price, id, onClick }) {
  return (
    <div className="card-container">
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
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
      </Link>
    </div>
  );
}

export default ProductCard;
