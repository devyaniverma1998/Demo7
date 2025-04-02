import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import './App.css';

// Existing imports
import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import HeaderSlider from './components/HeaderSlider';
import Brand from './components/Brand';
import Featured from './components/Featured';
import Feature from './components/Feature';
import Category from './components/Category';
import Action from './components/Action';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Review from './components/Review';
import List from './components/List';

// Additional imports from your directory
import About from './components/About';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Shipping from './components/Shipping';

function Home() {
  return (
    <>
      <HeaderSlider/>
     <Brand/>
     <Feature/>
     <Category/>
     <Action/>
     <Featured/>
     <Newsletter/>
     <Product/>
     <Review/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderTop/>
        <Navbar/>
         <BottomBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* New routes for additional components */}
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;