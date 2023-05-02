import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import { NavLink,Link,useParams } from 'react-router-dom'
const Swal = require('sweetalert2')


export default function SellerSingleProduct() {

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

const deleteItem = async (itemID) => {
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
            const res =  axios.delete(`http://localhost:5001/api/items/delete/${itemID}`).then((res) => {
              if (res) {
                Swal.fire({
                  title: "Success!",
                  text: "Your file has been deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  window.location.href = "/seller-dashboard";
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

  return (
    <div className="site-wrap">
       <DashboardHeader />
       <SellerSideNav />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container mr-5">
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
              <p>
              <p> {item.description} </p>
              <p> Status: {item.status} </p>
              <p> Available Quantity: {item.quantity} </p>
              </p>
              <p>
                <strong className="text-primary h4">LKR. {item.price}</strong>
              </p>
              <p>
                <Link to={`/updateitem/${item._id}`}>
                  <button className="btn btn-success mr-5">Update</button>
                </Link>
                  <button className="btn btn-danger" onClick={()=>deleteItem(item._id)} >Remove</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
