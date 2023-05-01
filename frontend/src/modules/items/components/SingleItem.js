
import Header from "../../common/components/headerBuyer";
import Footer from "../../common/components/Footer";
import { NavLink,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SingleItem() {
  const [item, setItem] = useState({});
  const params=useParams();
  const itemID=params.id;

useEffect(()=>{
  const getOneItems = async () => {
    await axios.get(`http://localhost:5001/api/items/${itemID}`).then((res) => {
      setItem(res.data);
    }).catch((err) => {
        console.log(err.massage);
    }) 
}
getOneItems();
},[])

  const { _id, name, sellerFname, dose, sellerName, price, desc, status, image } =
    item;

  const newObj = {
    oldid: _id,
    nameF: sellerFname,
    ItemName: name,
    Itemprice: price,
    image:image
  };
  // console.log(newObj);

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
              <NavLink to="/homebuyer" style={{ textDecoration: "none" }}>
                Home
              </NavLink>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <a href="/store" style={{ textDecoration: "none" }}>
                Store
              </a>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">{item.name}</strong>
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
                  src={item.image}
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{item.name}</h2>
              <p> Seller: {item.sellerFName} {item.sellerLName} </p>
              <p> {item.description} </p>
              <p>
                <strong className="text-primary h4">LKR. {item.price}</strong>
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
                  <button className="btn btn-success mr-5">Show Cart</button>
                </Link>
                <Link to="#">
                  <button className="btn btn-danger">Buy Now</button>
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
                        <th><center>Product Name</center></th> 
                        <th><center>Status</center></th>
                        <th><center>Available Quantity</center></th>
                        <th><center>Price</center></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td><center>{item.name}</center></td>
                          <td><center>{item.status}</center></td>
                          <td><center>{item.quantity}</center></td>
                          <td><center>LKR. {item.price}</center></td>
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
      <Footer />
    </div>
  );
}
