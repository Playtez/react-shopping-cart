import React from "react";

// Components
import Product from "./Product";
import { ProductsContext } from "../contexts/ProductsContext";

const Products = () => {
  const { products, addItem } = React.useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
