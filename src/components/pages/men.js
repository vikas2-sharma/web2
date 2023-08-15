import React from "react";
import ProductCard from "../components/product-card/product-card";
import { getRandom } from "../../misc/utils";

function MenSection(props) {
  const randomName = [
    "Austyn Kent",
    "Abel Billings",
    "Bilal Hardesty",
    "Hassan Steiner",
    "Tristin Hankins",
    "Priscilla Celine Tinsley",
    "Alexander Koby Andrews",
    "Lia Cailin Crabtree",
    "Ernesto Jarett Cardwell",
    "Camila Ingrid Cathey",
    "Varun Alek Molnar",
    "Miguel Bradford Wicker",
    "Edgar Jamarcus Phelan",
    "Reyna Abbey Gregg",
    "Dillion Benjamin Maynard",
  ];
  const products = [];
  for (let i = 1; i <= 30; i++) {
    const id = getRandom(11);

    products.push({
      id: id,
      label: randomName[getRandom(randomName.length - 1)],
      imageSrc: require(`../../images/products/${id + 1}.jpg`),
      price: getRandom(4000, 2000),
    });
  }
  return (
    <>
      <div>
        <h1>Men</h1>
        <div class="products-container">
          {products.map((product) => (
            <ProductCard
              title={product.label}
              image={product.imageSrc}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenSection;
