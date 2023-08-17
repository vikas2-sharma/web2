import React from "react";
import ProductCard from "../components/product-card/product-card";
import { getRandom } from "../../misc/utils";

function MenSection(props) {
  const products = [
    {
      id: 1,
      name: "Classic Comfort Tee",
      imageId: require(`../../images/products/1.jpg`),
      price: 2500,
    },
    {
      id: 2,
      name: "Nature Explorer Tee",
      imageId: require(`../../images/products/2.jpg`),
      price: 3000,
    },
    {
      id: 3,
      name: "Music Lover Graphic Tee",
      imageId: require(`../../images/products/3.jpg`),
      price: 1800,
    },
    {
      id: 4,
      name: "Adventure Seeker Tee",
      imageId: require(`../../images/products/4.jpg`),
      price: 3200,
    },
    {
      id: 5,
      name: "Colorful Splash Tee",
      imageId: require(`../../images/products/5.jpg`),
      price: 1500,
    },
    {
      id: 6,
      name: "Ethnic Boho Spirit T",
      imageId: require(`../../images/products/6.jpg`),
      price: 2200,
    },
    {
      id: 7,
      name: "Retro Gaming Tee",
      imageId: require(`../../images/products/7.jpg`),
      price: 4000,
    },
    {
      id: 8,
      name: "Sports Enthusiast T",
      imageId: require(`../../images/products/8.jpg`),
      price: 2800,
    },
    {
      id: 9,
      name: "Ethereal Space Tee",
      imageId: require(`../../images/products/9.jpg`),
      price: 3500,
    },
    {
      id: 10,
      name: "Casual Chambray Shirt",
      imageId: require(`../../images/products/10.jpg`),
      price: 2900,
    },
    {
      id: 11,
      name: "Vintage Western Shirt",
      imageId: require(`../../images/products/11.jpg`),
      price: 4700,
    },
    {
      id: 12,
      name: "Abstract Art Print T",
      imageId: require(`../../images/products/1.jpg`),
      price: 4200,
    },
    {
      id: 13,
      name: "Geek Chic Graphic Tee",
      imageId: require(`../../images/products/3.jpg`),
      price: 1700,
    },
    {
      id: 14,
      name: "Boho Spirit T-shirt",
      imageId: require(`../../images/products/6.jpg`),
      price: 2300,
    },
    {
      id: 15,
      name: "Linen Comfort Shirt",
      imageId: require(`../../images/products/10.jpg`),
      price: 4800,
    },
    {
      id: 16,
      name: "Timeless Striped Shirt",
      imageId: require(`../../images/products/11.jpg`),
      price: 3200,
    },
    {
      id: 17,
      name: "Vintage Retro Tee",
      imageId: require(`../../images/products/2.jpg`),
      price: 1800,
    },
    {
      id: 18,
      name: "Tropical Breeze Shirt",
      imageId: require(`../../images/products/9.jpg`),
      price: 2900,
    },
    {
      id: 19,
      name: "Denim Delight Shirt",
      imageId: require(`../../images/products/5.jpg`),
      price: 2100,
    },
    {
      id: 20,
      name: "Elegant Silk Shirt",
      imageId: require(`../../images/products/10.jpg`),
      price: 4500,
    },
    {
      id: 21,
      name: "Plaid Perfection Shirt",
      imageId: require(`../../images/products/3.jpg`),
      price: 1400,
    },
    {
      id: 22,
      name: "Athleisure Active T-shirt",
      imageId: require(`../../images/products/1.jpg`),
      price: 2700,
    },
    {
      id: 23,
      name: "Rugged Outdoor Shirt",
      imageId: require(`../../images/products/7.jpg`),
      price: 3700,
    },
    {
      id: 24,
      name: "Nautical Sailor Shirt",
      imageId: require(`../../images/products/8.jpg`),
      price: 3200,
    },
    {
      id: 25,
      name: "Bohemian Embroidered Shirt",
      imageId: require(`../../images/products/11.jpg`),
      price: 2800,
    },
    {
      id: 26,
      name: "Modern Minimalist T",
      imageId: require(`../../images/products/2.jpg`),
      price: 2100,
    },
    {
      id: 27,
      name: "Inspire Me Motto T",
      imageId: require(`../../images/products/4.jpg`),
      price: 3600,
    },
    {
      id: 28,
      name: "Creative Mind Graphic Tee",
      imageId: require(`../../images/products/6.jpg`),
      price: 1900,
    },
    {
      id: 29,
      name: "Sleek Black Button-Up",
      imageId: require(`../../images/products/9.jpg`),
      price: 4200,
    },
    {
      id: 30,
      name: "Subtle Polka Dot Shirt",
      imageId: require(`../../images/products/7.jpg`),
      price: 2400,
    },
  ];

  return (
    <>
      <div>
        <h1>Men</h1>
        <div class="products-container">
          {products.map((product) => (
            <ProductCard
              title={product.name}
              image={product.imageId}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenSection;
