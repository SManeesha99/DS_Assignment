import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotRegHeader() {
  return (
    <div>
      <div className="site-navbar py-2">
        <div className="search-wrap">
          <div className="container">
            <a href="#" className="search-close js-search-close" style={{textDecoration: 'none'}}><span className="icon-close2"></span></a>
            <form action="#" method="post">
              <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
            </form>
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <a href="/" className="js-logo-clone" style={{textDecoration: 'none'}}>Thambapanni</a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active"><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/'>Store</NavLink></li>
                  <li><NavLink to='/selectlogin'>About</NavLink></li>
                  <li><NavLink to='/selectlogin'>Contact</NavLink></li>
                  <li><NavLink to='/selectlogin'>Sign In</NavLink></li>
                  <li><NavLink to='/selectregister'>Sign Up</NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <a href="#" className="icons-btn d-inline-block js-search-open" style={{textDecoration: 'none'}}><span className="icon-search"></span></a>
              <a href="/cart" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-cart"></span>
                <span className="number">2</span>
              </a>
              <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none" style={{textDecoration: 'none'}}><span
                className="icon-menu"></span></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}