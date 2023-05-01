import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from './Footer'
import HeaderBuyer from './headerBuyer'
import BottomBanners from './BottomBanners'
import { NavLink } from 'react-router-dom'

export default function Homepage() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [item, setItem] = React.useState([]);
  useEffect(()=>{
      const getAllItems = async () => {
        await axios.get(`http://localhost:5001/api/items/`).then((res) => {
          setItem(res.data);
        console.log( res.data)
        }).catch((err) => {
            console.log(err.massage);
        }) 
    }
    getAllItems();
    },[])

    // console.log(item)

    const filteredItem = item.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        item.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  });
  


  return (
    <div>
      <div className="site-wrap">
        <HeaderBuyer />
        <div className="site-blocks-cover" style={{ backgroundImage: 'url("./assets/images/back1.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                <div className="site-block-cover-content text-center">
                  <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                  <h1>Welcome To Thambapanni</h1>
                  <p>
                    <NavLink to='/store' className="btn btn-primary px-5 py-3">Shop Now</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">Popular Products</h2>
              </div>
            </div>
            <div className="row">
            {filteredItem.map((item)=>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href={`/single-item/${item._id}`}> <img src={item.image} alt="Image" style={{ width:'250px', height:'250px' }}/></a>
                <h3 className="text-dark"><a href={`/single-item/${item._id}`} style={{fontSize: '25px'}}>{item.name}</a></h3>
                <p className="price">LKR. {item.price}</p>
              </div>
              )}
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <a href="/store" className="btn btn-primary px-4 py-3">View All Products</a>
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
