/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/menu.css';

function Menu() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top first-nav">
        <div className="container-fluid">

          <ul className="navbar-nav flex-row align-items-center navbar-desktop">
            <li className="nav-item ml-3">
              <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png" alt="logo" />
            </li>
          </ul>

          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a href="#" className="p-2 text-dark nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign_in" className="p-2 text-dark nav-link">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign_up" className="p-2 text-dark nav-link">
                Sign up
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="p-2 bg-oschool text-white rounded nav-link">
                Write a post
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
                <img className="rounded-circle img-fluid user-avatar" src="https://secure.gravatar.com/avatar/9c275cba24f7c939201cda28f832f8e0?s=80" alt="User" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top d-md-none">
        <ul className="navbar-nav flex-row align-items-center w-100 d-flex justify-content-between">
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-bars hamburger acumin-gray-color" />
            </a>
          </li>
          <li className="nav-item ml-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png" alt="logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
