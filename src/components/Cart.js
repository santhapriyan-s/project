import React from "react";

const Cart = ({ cart, setCart, favourites, setFavourites }) => {
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const removeFromFavourites = (product) => {
    const updatedFavourites = favourites.filter((fav) => fav.id !== product.id);
    setFavourites(updatedFavourites); // Update favourites
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              <p>{item.description}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <h2>Your Favourites</h2>
      {favourites.length === 0 ? (
        <p>You have no favourites yet.</p>
      ) : (
        <div className="cart-grid">
          {favourites.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>RS.{item.price}</p>
              <p>{item.description}</p>
              <button onClick={() => removeFromFavourites(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
