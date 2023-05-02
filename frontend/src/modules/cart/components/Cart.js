import React from "react";
import Header from "../../common/components/headerBuyer";
import Footer from "../../common/components/Footer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Swal = require('sweetalert2')

export default function Cart() {
  const id =localStorage.getItem("id");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cart, setCart] = React.useState([]);

  useEffect(()=>{
    const getOwnCart = async () => {
      await axios.get(`http://localhost:5002/Cart/owncart/${localStorage.getItem("id")}`).then((res) => {
        setCart(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getOwnCart();
  },[])

  const filteredItem = cart.filter((cart) => {
    return (
      cart.ItemName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      cart.ItemPrice.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});const deleteItem = async (_id) => {
  try{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.value === true) {
            const res =  axios.delete(`http://localhost:5002/Cart/delete/${_id}`).then((res) => {
              if (res) {
                Swal.fire({
                  title: "Success!",
                  text: "Your file has been deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  window.location.reload();
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Something went wrong",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }
        });

  }catch(err){
      console.log(err.data.msg);
  }
}



  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/cart/all")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // let sum = 0;
  // const calculatePrice = () => {
  //   for (let i = 0; i < data.length; i++) {
  //     sum += data[i].Itemprice;
  //     console.log(sum);
  //   }
  // };
  // calculatePrice();

  
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
                        <th className="product-thumbnail">Item Image</th>
                        <th className="product-name">Item Name</th>
                        <th className="product-price">Price</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {filteredItem.map((cart)=>
                        <tr>
                          <td className="product-thumbnail">
                            <img
                              src={cart.ItemImage}
                              style={{ width:'100px', height:'100px' }}
                              alt="Image"
                              className="img-fluid"
                            />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{cart.ItemName}</h2>
                          </td>
                          <td>LKR. {cart.ItemPrice}</td>
                          <td>
                            <span className="icon-delete" onClick={()=>deleteItem(cart._id)} style={{ fontSize:'30px'}}></span>  
                          </td>
                        </tr>
                      )}
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
                        <strong className="text-black"></strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black"></strong>
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
        <Footer />
      </div>
    </div>
  );
}
