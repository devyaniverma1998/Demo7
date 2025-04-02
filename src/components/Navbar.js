import "../styles/style.css";
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <Link to="#" className="navbar-brand">
            MENU
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Left-aligned nav links */}
            <div className="navbar-nav me-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/list" className="nav-item nav-link">
                Products
              </Link>
              <Link to="/detail" className="nav-item nav-link">
                Product Detail
              </Link>
              <Link to="/cart" className="nav-item nav-link">
                Cart
              </Link>
              <Link to="/checkout" className="nav-item nav-link">
                Checkout
              </Link>
              <Link to="/account" className="nav-item nav-link">
                My Account
              </Link>
            </div>

            {/* Right-aligned nav link */}
            <div className="navbar-nav ms-auto">
              <Link to="/contact" className="nav-item nav-link">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
