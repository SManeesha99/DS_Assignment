import React from "react";
import Header from "../../common/components/headerBuyer";
import BottomBanners from "../../common/components/BottomBanners";
import Footer from "../../common/components/Footer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cart/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  let sum = 0;
  const calculatePrice = () => {
    for (let i = 0; i < data.length; i++) {
      sum += data[i].Itemprice;
      console.log(sum);
    }
  };
  calculatePrice();

  
  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <NavLink to="/homebuyer" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>{" "}
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Cart</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((i) => (
                        <tr key={i._id}>
                          <td className="product-thumbnail">
                            <img
                              src={i.image}
                              alt="Image"
                              className="img-fluid"
                            />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{i.ItemName}</h2>
                          </td>
                          <td>{i.Itemprice}</td>
                          
                          <td>$49.00</td>
                          <td>
                            <a
                              href="#"
                              className="btn btn-primary height-auto btn-sm"
                            >
                              X
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-primary btn-md btn-block">
                      Update Cart
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-primary btn-md btn-block">
                      Continue Shopping
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" for="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-md px-4">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">{sum}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">{sum}</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          className="btn btn-primary btn-lg btn-block"
                          onclick="window.location='checkout.html'"
                        >
                          Proceed To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomBanners />
        <Footer />
      </div>
    </div>
  );
}
