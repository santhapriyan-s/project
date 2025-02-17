import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const addToFavourites = (product) => {
    if (!favourites.find((item) => item.id === product.id)) {
      setFavourites([...favourites, product]);
    }
  };

  const ProtectedRoute = ({ children, user }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      {user && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/main" replace /> : <Login setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/main" replace /> : <Signup setUser={setUser} />}
        />
        <Route
          path="/main"
          element={
            <ProtectedRoute user={user}>
              <MainPage user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute user={user}>
              <ProductList addToCart={addToCart} addToFavourites={addToFavourites} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute user={user}>
              <ProductDetails addToCart={addToCart} addToFavourites={addToFavourites} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={user}>
              <Cart
                cart={cart}
                setCart={setCart}
                favourites={favourites}
                setFavourites={setFavourites}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute user={user}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
