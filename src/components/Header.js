import React from "react";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

export default function Header({ isOpen, quit, isLogin }) {
  const { pathname } = useLocation();  

  return (
    <header className={"header " + (pathname === "/saved-news" && "header_white")}>
      <h3
        className={
          "header__title " +
          (pathname === "/saved-news" && "header__title_black")
        }
      >
        NewsExplorer
      </h3>
      <Navigation isOpen={isOpen} quit={quit} isLogin={isLogin}/>
    </header>
  );
}
