import React, { useState, useEffect } from "react";
import { Icon, Navbar, Switch } from "react-materialize";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const location = useLocation(); // Sử dụng useLocation để lấy thông tin về trang hiện tại
  const [brandText, setBrandText] = useState("Player Cards"); // Ban đầu là "Player Cards"

  useEffect(() => {
    // Kiểm tra nếu trang hiện tại là "/film," thay đổi brandText thành "Movie Collection"
    if (location.pathname === "/football") {
      setBrandText("Player Cards");
    } else {
      setBrandText("Movie Collection"); // Nếu không phải trang "/film," thì giữ nguyên "Player Cards"
    }
  }, [location]);

  return (
    <ThemeContext.Consumer>
      {({ dark, toggle }) => (
        <Navbar
          className="menu"
          alignLinks="right"
          brand={<span className="brand-logo">{brandText}</span>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
        >
          <ul>
            <li>
              <Link to="/">
                <Icon left>home</Icon> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Icon left>info_outline</Icon> About
              </Link>
            </li>
            <li>
              <Link to="/news">
                <Icon left>dvr</Icon> News
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Icon left>contacts</Icon> Contact
              </Link>
            </li>
            <li>
              <Link to="/football">
                <Icon left>directionsrun</Icon> Footballer
              </Link>
            </li>
            <li>
              <Switch
                offLabel="Light"
                onLabel="Dark"
                onChange={toggle}
                checked={dark}
              />
            </li>
          </ul>
        </Navbar>
      )}
    </ThemeContext.Consumer>
  );
}
