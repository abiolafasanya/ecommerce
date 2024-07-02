import React from "react";
import "./Header.css";
import { menus } from "../../data/menus";

export default function Header() {
  return (
    <div className="header">
      <h2>
        <span style={{ color: "purple" }}>Serenade</span>
        <span style={{ color: "orange" }}>Dot</span>
        <span style={{ color: "purple" }}>Life</span>
      </h2>
      <menu className="header-menus">
        {menus.map((menu, index) => (
          <a style={{ display: "block" }} key={index} href={menu.url}>
            {menu.name}
          </a>
        ))}
      </menu>
    </div>
  );
}
