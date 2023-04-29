import React from 'react'
import Footer from './Footer'
import NotRegHeader from './NotRegHeader'
import BottomBanners from './BottomBanners'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      <div className="site-wrap">
        <NotRegHeader />
        <div className="site-blocks-cover" style={{ backgroundImage: 'url("./assets/images/back1.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                <div className="site-block-cover-content text-center">
                  <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                  <h1>Welcome To Thambapanni</h1>
                  <p>
                    <a href="#products" className="btn btn-primary px-5 py-3">Shop Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container" id="products">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">Popular Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="/single-item"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/single-item"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Chanca Piedra</a></h3>
                <p className="price">$70.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/single-item"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/single-item"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Cetyl Pure</a></h3>
                <p className="price"><del>45.00</del> &mdash; $20.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/single-item"> <img src="./assets/images/product_05.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>CLA Core</a></h3>
                <p className="price">$38.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="/single-item"> <img src="./assets/images/product_06.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Poo Pourri</a></h3>
                <p className="price"><del>$89</del> &mdash; $38.00</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <a href="/selectlogin" className="btn btn-primary px-4 py-3">View All Products</a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">New Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 block-3 products-wrap">
                <div className="nonloop-block-3 owl-carousel">
                  <div className="text-center item mb-4">
                    <a href="/single-item"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="/single-item"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="/single-item"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="/single-item"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="/single-item" style={{textDecoration: 'none'}}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">Testimonials</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 block-3 products-wrap">
                <div className="nonloop-block-3 no-direction owl-carousel">
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_1.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Kelly Holmes</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                        obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                        unde.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Rebecca Morando</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                        obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                        unde.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Lucas Gallone</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                        obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                        unde.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Andrew Neel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
