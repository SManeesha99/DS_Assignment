import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderBuyer() {
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
                <a href="/homebuyer" className="js-logo-clone" style={{textDecoration: 'none'}}>Thambapanni</a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active"><NavLink to='/homebuyer'>Home</NavLink></li>
                  <li><NavLink to='/store'>Store</NavLink></li>
                  {/* <li className="has-children">
                    <a href="#">Option</a>
                    <ul className="dropdown">
                      <li><a href="#">View Profile</a></li>
                      <li><a href="#">Add Product</a></li>
                    </ul>
                  </li> */}
                  <li><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
                  <li><NavLink to='/contact'>Profile</NavLink></li>
                  <li><NavLink to='/'>Sign Out</NavLink></li>
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
