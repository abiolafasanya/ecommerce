import React, { useEffect, useState } from "react";
import { LuStar } from "react-icons/lu";
import { productsData } from "../../data/products";

export default function Products() {
  const [currentSelection, setCurrentSelection] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (currentSelection === 0) {
      setProducts(productsData.featured);
      console.log("selected popular", currentSelection);
    }
    if (currentSelection === 1) {
      setProducts(productsData.bestSellers);
      console.log("selected popular", currentSelection);
    }
    if (currentSelection === 2) {
      setProducts(productsData.popular);
      console.log("selected popular", currentSelection);
    }
  }, [currentSelection, products]);

  function handleSelection(index = 0) {
    setCurrentSelection(index);
  }

  const productsCategories = ["Featured", "Popular", "Best Sellers"];
  return (
    <section className="product">
      <h2>Trending Products</h2>
      <div className="product-category">
        {productsCategories.map((category, index) => (
          <button
            onClick={() => handleSelection(index)}
            className={`${currentSelection === index ? "selected" : ""}`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-items">
        {products.map((product, index) => (
          <article key={index}>
            <img src={product.image} alt={product.name} />
            <section>
              <h5>{product.name}</h5>
              <article className="product-pricing">
                <span>${product.price}</span>
                <Rating val={product.rating} />
              </article>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}

function Rating({ val = 0 }) {
  function generateArray(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }

  const rating = generateArray(val);

  return (
    <div className="rating">
      {rating.map((_, index) => (
        <LuStar key={index} style={{ color: "orange" }} />
      ))}
    </div>
  );
}
