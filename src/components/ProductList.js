import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import productsData from "../data/products";

const ProductList = ({ addToCart, addToFavourites }) => {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();

  const toggleFavorite = (product) => {
    addToFavourites(product);
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setProducts(updatedProducts);
  };

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } }); // Pass the selected product to the Checkout page
  };
  

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>Rs.{product.price}</p>
            <p>{product.description}</p>
            <div className="button-container">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="favorite-btn" onClick={() => toggleFavorite(product)}>
                {product.isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
              </button>
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
