import React from 'react';
import JLogo from '../../images/letra-j.png';
import './Navbar.css';

export default function Navbar() {
  const scrollTo = (id) => {
    const option = document.getElementById(id);
    const input = document.getElementById('input-menu-slide');
    input.checked = false;
    option.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <nav className="navContainer">
        <img
          className="logo"
          src={JLogo}
          alt="logo"
          onClick={() => scrollTo('about-me')}
        />

        <div>
          <input type="checkbox" id="input-menu-slide" />
          <span className="hamburguer" />
          <span className="hamburguer" />
          <span className="hamburguer" />
          <ul className="ul" id="menu">
            <li className="li" onClick={() => scrollTo('about-me')}>
              <p className="p">{'<'}</p>
              Sobre mi
              <p className="p">{'/>'}</p>
            </li>
            <li onClick={() => scrollTo('stacks')} className="li">
              <p className="p">{'<'}</p>
              Tecnologias
              <p className="p">{'/>'}</p>
            </li>
            <li onClick={() => scrollTo('container-projects')} className="li">
              <p className="p">{'<'}</p>
              Projectos
              <p className="p">{'/>'}</p>
            </li>
            <li onClick={() => scrollTo('contact-me')} className="li">
              <p className="p">{'<'}</p>
              Contactame
              <p className="p">{'/>'}</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
