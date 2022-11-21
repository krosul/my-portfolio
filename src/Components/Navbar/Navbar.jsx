import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const scrollTo = (id) => {
    const option = document.getElementById(id);
    const input = document.getElementById("input-menu-slide");
    input.checked = false;
    option.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="navContainer">
        <p className="logo" onClick={() => scrollTo("about-me")}>
          Juan Pablo'dev
        </p>
        <div>
          <input type="checkbox" id="input-menu-slide" />
          <span className="hamburguer" />
          <span className="hamburguer" />
          <span className="hamburguer" />
          <ul className="ul" id="menu">
            <li className="li" onClick={() => scrollTo("about-me")}>
              Sobre mi
            </li>
            <li onClick={() => scrollTo("stacks")} className="li">
              Tecnologias
            </li>
            <li onClick={() => scrollTo("container-projects")} className="li">
              Projectos
            </li>
            <li onClick={() => scrollTo("contact-me")} className="li">
              Contactame
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
