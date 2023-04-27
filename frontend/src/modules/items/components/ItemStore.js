import React from 'react'
import Header from '../../common/components/headerBuyer'
import BottomBanners from '../../common/components/BottomBanners'
import Footer from '../../common/components/Footer'
import { NavLink } from 'react-router-dom'

export default function ItemStore() {
  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><NavLink to='/homepage' style={{ textDecoration: 'none' }}>Home</NavLink> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                <div id="slider-range" className="border-primary"></div>
                <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
              </div>
              <div className="col-lg-6">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Reference</h3>
                <button type="button" className="btn btn-secondary btn-md dropdown-toggle px-4" id="dropdownMenuReference"
                  data-toggle="dropdown">Reference</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                  <a className="dropdown-item" href="#">Relevance</a>
                  <a className="dropdown-item" href="#">Name, A to Z</a>
                  <a className="dropdown-item" href="#">Name, Z to A</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Price, low to high</a>
                  <a className="dropdown-item" href="#">Price, high to low</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Chanca Piedra</a></h3>
                <p className="price">$70.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Cetyl Pure</a></h3>
                <p className="price"><del>45.00</del> &mdash; $20.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_05.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>CLA Core</a></h3>
                <p className="price">$38.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_06.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Poo Pourri</a></h3>
                <p className="price"><del>$89</del> &mdash; $38.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Chanca Piedra</a></h3>
                <p className="price">$70.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Cetyl Pure</a></h3>
                <p className="price"><del>45.00</del> &mdash; $20.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_05.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>CLA Core</a></h3>
                <p className="price">$38.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_06.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Poo Pourri</a></h3>
                <p className="price"><del>$89</del> &mdash; $38.00</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <div className="site-block-27">
                  <ul>
                    <li><a href="#" style={{textDecoration: 'none'}}>&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>2</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>3</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>4</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>5</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomBanners />
        <Footer />
      </div>
    </div>
  )
}
