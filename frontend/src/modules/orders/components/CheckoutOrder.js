import React from "react";
import { useEffect, useState } from 'react'
import Header from '../../common/components/headerBuyer'
import Footer from '../../common/components/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
const Swal = require('sweetalert2');

export default function CheckoutOrder() {

  const id =localStorage.getItem("id");
    const firstName =localStorage.getItem("firstName");
    const lastName =localStorage.getItem("lastName");
    const [searchTerm, setSearchTerm] = React.useState("");
    const [user, setUser]=useState({});
    const [cart, setCart]=useState({});

    const [orderPlayload, setOrderPlayload, ] = React.useState({

      BuyerID: id,
      buyerFName: firstName,
      buyerLName: lastName,
      Buyeraddress: "",
      BuyerEmail: "",
      BuyerMobile: "",
      OrderNote: "",
  
  });

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

//   const filteredItem = cart.filter((cart) => {
//     return (
//       cart.ItemName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//       cart.ItemPrice.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//     );
// });


    const onChangeInput = (e) => {
      setOrderPlayload({ 
        ...orderPlayload, 
        [e.target.name]: e.target.value
       });
  };

  useEffect(()=>{
    const getUser= async () => {
      await axios.get(`http://localhost:5004/api/user/get/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data.data);
      }).catch((err) => {
          console.log(err.massage);
      })
  }
  getUser();
  },[id])

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(orderPlayload)
        const res = await axios.post("http://localhost:5005/api/Oder/send",orderPlayload);
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Order added successfully",
          icon: 'success',
          timer: 2000,
          button: false,
        }).then(()=>{
          window.location.reload();
        })       
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.msg,
          icon: 'warning',
          timer: 2000,
          button: false,
        })
      }
    };

  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <NavLink to='/homebuyer' style={{ textDecoration: 'none' }}>Home</NavLink> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Checkout</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label for="c_fname" className="text-black">First Name</label>
                      <input type="text" className="form-control" id="c_fname" name="c_fname" value={user.firstName} readonly/>
                    </div>
                    <div className="col-md-6">
                      <label for="c_lname" className="text-black">Last Name</label>
                      <input type="text" className="form-control" id="c_lname" value={user.lastName} readonly name="c_lname" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label for="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                      <textarea name="Buyeraddress" id="c_address" cols="30" rows="5" className="form-control" onChange={(e) => onChangeInput(e)}
                      placeholder="Enter Address"></textarea>
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label for="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_email_address" name="BuyerEmail" onChange={(e) => onChangeInput(e)} placeholder="Enter Email" />
                    </div>
                    <div className="col-md-6">
                      <label for="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_phone" name="BuyerMobile" placeholder="Phone Number" onChange={(e) => onChangeInput(e)} />
                    </div>
                  </div>
                  <div className="form-group">
                  </div>
                  <div className="form-group">
                    <label for="c_order_notes" className="text-black">Order Notes</label>
                    <textarea name="OrderNote" id="c_order_notes" cols="30" rows="5" className="form-control" onChange={(e) => onChangeInput(e)}
                      placeholder="Write your notes here..."></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <th>Item Name</th>
                          <th>Price</th>
                        </thead>
                        <tbody>
                        {/* {filteredItem.map((cart)=> */}
                          <tr>
                            <td>{cart.ItemName}</td>
                            <td>LKR. {cart.ItemPrice}</td>
                          </tr>
                         {/* )} */}
                          <tr>
                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                            <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="form-group">
                        <button className="btn btn-primary btn-lg btn-block" onClick={(e)=> onSubmit(e)} >Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
