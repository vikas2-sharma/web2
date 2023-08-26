import React from "react";
import ProductCard from "../components/product-card/product-card";

function MenSection(props) {
  return (
    <>
      <div>
        <h1>Men</h1>
        <div class="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.imageId}
              price={product.price}
              id={product.id}
              onClick={() => {
                console.log(product);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenSection;

const products = [
  {
    id: 1,
    name: "Classic Comfort Tee",
    imageId: `../../images/products/1.jpg`,
    price: 2500,
    description:
      "A timeless classic, this comfort tee is perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Nature Explorer Tee",
    imageId: `../../images/products/2.jpg`,
    price: 3000,
    description: "Embrace your inner explorer with this nature-inspired tee.",
  },
  {
    id: 3,
    name: "Music Lover Graphic Tee",
    imageId: `../../images/products/3.jpg`,
    price: 1800,
    description: "Express your love for music with this stylish graphic tee.",
  },
  {
    id: 4,
    name: "Adventure Seeker Tee",
    imageId: `../../images/products/4.jpg`,
    price: 3200,
    description:
      "For those who seek adventure, this tee is your perfect companion.",
  },
  {
    id: 5,
    name: "Colorful Splash Tee",
    imageId: `../../images/products/5.jpg`,
    price: 1500,
    description: "Make a vibrant statement with this colorful splash tee.",
  },
  {
    id: 6,
    name: "Ethnic Boho Spirit T",
    imageId: `../../images/products/6.jpg`,
    price: 2200,
    description:
      "Capture the essence of boho spirit with this ethnic-inspired tee.",
  },
  {
    id: 7,
    name: "Retro Gaming Tee",
    imageId: `../../images/products/7.jpg`,
    price: 4000,
    description: "Take a nostalgic trip with this retro gaming-themed tee.",
  },
  {
    id: 8,
    name: "Sports Enthusiast T",
    imageId: `../../images/products/8.jpg`,
    price: 2800,
    description: "Show off your sports enthusiasm with this stylish tee.",
  },
  {
    id: 9,
    name: "Ethereal Space Tee",
    imageId: `../../images/products/9.jpg`,
    price: 3500,
    description: "Embark on a cosmic journey with this ethereal space tee.",
  },
  {
    id: 10,
    name: "Casual Chambray Shirt",
    imageId: `../../images/products/10.jpg`,
    price: 2900,
    description:
      "Effortlessly stylish, this chambray shirt is a casual must-have.",
  },
  {
    id: 11,
    name: "Vintage Western Shirt",
    imageId: `../../images/products/11.jpg`,
    price: 4700,
    description: "Embrace the vintage western look with this stylish shirt.",
  },
  {
    id: 12,
    name: "Abstract Art Print T",
    imageId: `../../images/products/1.jpg`,
    price: 4200,
    description: "Wear your artistic flair with this abstract art print tee.",
  },
  {
    id: 13,
    name: "Geek Chic Graphic Tee",
    imageId: `../../images/products/3.jpg`,
    price: 1700,
    description: "Combine geekiness and style with this chic graphic tee.",
  },
  {
    id: 14,
    name: "Boho Spirit T-shirt",
    imageId: `../../images/products/6.jpg`,
    price: 2300,
    description: "Embrace boho vibes with this spirit-inspired t-shirt.",
  },
  {
    id: 15,
    name: "Linen Comfort Shirt",
    imageId: `../../images/products/10.jpg`,
    price: 4800,
    description: "Stay comfortable and stylish with this linen shirt.",
  },
  {
    id: 16,
    name: "Timeless Striped Shirt",
    imageId: `../../images/products/11.jpg`,
    price: 3200,
    description: "Elevate your style with this timeless striped shirt.",
  },
  {
    id: 17,
    name: "Vintage Retro Tee",
    imageId: `../../images/products/2.jpg`,
    price: 1800,
    description: "Embrace retro vibes with this vintage-inspired tee.",
  },
  {
    id: 18,
    name: "Tropical Breeze Shirt",
    imageId: `../../images/products/9.jpg`,
    price: 2900,
    description: "Feel the tropical breeze with this stylish shirt.",
  },
  {
    id: 19,
    name: "Denim Delight Shirt",
    imageId: `../../images/products/5.jpg`,
    price: 2100,
    description: "Experience the delight of denim with this shirt.",
  },
  {
    id: 20,
    name: "Elegant Silk Shirt",
    imageId: `../../images/products/10.jpg`,
    price: 4500,
    description: "Exude elegance with this luxurious silk shirt.",
  },
  {
    id: 21,
    name: "Plaid Perfection Shirt",
    imageId: `../../images/products/3.jpg`,
    price: 1400,
    description: "Achieve plaid perfection with this stylish shirt.",
  },
  {
    id: 22,
    name: "Athleisure Active T-shirt",
    imageId: `../../images/products/1.jpg`,
    price: 2700,
    description: "Combine active and casual with this athleisure tee.",
  },
  {
    id: 23,
    name: "Rugged Outdoor Shirt",
    imageId: `../../images/products/7.jpg`,
    price: 3700,
    description: "Conquer the outdoors with this rugged shirt.",
  },
  {
    id: 24,
    name: "Nautical Sailor Shirt",
    imageId: `../../images/products/8.jpg`,
    price: 3200,
    description: "Set sail with nautical vibes in this sailor shirt.",
  },
  {
    id: 25,
    name: "Bohemian Embroidered Shirt",
    imageId: `../../images/products/11.jpg`,
    price: 2800,
    description: "Embrace bohemian flair with this embroidered shirt.",
  },
  {
    id: 26,
    name: "Modern Minimalist T",
    imageId: `../../images/products/2.jpg`,
    price: 2100,
    description: "Simplify your style with this modern minimalist tee.",
  },
  {
    id: 27,
    name: "Inspire Me Motto T",
    imageId: `../../images/products/4.jpg`,
    price: 3600,
    description: "Stay motivated and inspired with this motto-themed tee.",
  },
  {
    id: 28,
    name: "Creative Mind Graphic Tee",
    imageId: `../../images/products/6.jpg`,
    price: 1900,
    description:
      "Fuel your creativity with this graphic tee that speaks your mind.",
  },
  {
    id: 29,
    name: "Sleek Black Button-Up",
    imageId: `../../images/products/9.jpg`,
    price: 4200,
    description: "Elevate your style with this sleek black button-up shirt.",
  },
  {
    id: 30,
    name: "Subtle Polka Dot Shirt",
    imageId: `../../images/products/7.jpg`,
    price: 2400,
    description: "Add a touch of playfulness with this subtle polka dot shirt.",
  },
];
