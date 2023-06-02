import { useState } from "react"
import React from 'react'
import './navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt=""
          className="nav-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${showMenu ? "is-active" : ""} `}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
