import React from "react";
import Header from "../../common/components/headerBuyer";
import BottomBanners from "../../common/components/BottomBanners";
import Footer from "../../common/components/Footer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SingleItem() {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5003/api/items/643d98c2c9a67683ed32564d`) //this endpoint need to check. good practice is use the api endpoint as const.
      .then((response) => {
        setItem(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(item);
  }, [item]);

  const { _id, name, type, dose, sellerName, price, desc, status, image } =
    item;

  const newObj = {
    oldid: _id,
    ItemName: name,
    Itemprice: price,
    image:image
  };
  console.log(newObj);

  const addToCart = async () => {
    axios
      .post("/api/cart/send", newObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteFromCart = async () => {
    await axios.delete("/api/items").then((res) => {});
  };

  return (
    <div className="site-wrap">
      <Header />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <NavLink to="/homepage" style={{ textDecoration: "none" }}>
                Home
              </NavLink>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <a href="shop.html" style={{ textDecoration: "none" }}>
                Store
              </a>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Ibuprofen Tablets, 200mg</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                  src={image}
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
              </p>
              <p>
                <del>$95.00</del>{" "}
                <strong className="text-primary h4">{price}</strong>
              </p>
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: "220px" }}>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary js-btn-minus"
                      type="button"
                      onClick={deleteFromCart}
                    >
                      &minus;
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value="1"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary js-btn-plus"
                      type="button"
                      onClick={addToCart}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p>
                <Link to="/cart">
                  <button className="btn btn-success">Show Cart</button>
                </Link>
              </p>
              <div className="mt-5">
                <ul
                  className="nav nav-pills mb-3 custom-pill"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Ordering Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Specifications
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <table className="table custom-table">
                      <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>status</th>
                        <th>price</th>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <th scope="row">OTC022401</th> */}
                          <td>{name}</td>
                          <td>{desc}</td>
                          <td>{status}</td>
                          <td>{price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <table className="table custom-table">
                      <tbody>
                        <tr>
                          <td>HPIS CODE</td>
                          <td className="bg-light">999_200_40_0</td>
                        </tr>
                        <tr>
                          <td>HEALTHCARE PROVIDERS ONLY</td>
                          <td className="bg-light">No</td>
                        </tr>
                        <tr>
                          <td>LATEX FREE</td>
                          <td className="bg-light">Yes, No</td>
                        </tr>
                        <tr>
                          <td>MEDICATION ROUTE</td>
                          <td className="bg-light">Topical</td>
                        </tr>
                      </tbody>
                    </table>
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
  );
}
