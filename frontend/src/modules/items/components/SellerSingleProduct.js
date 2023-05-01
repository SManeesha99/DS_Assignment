import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import { NavLink,Link,useParams } from 'react-router-dom'

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
              <p>
              <p> {item.description} </p>
              </p>
              <p>
                <strong className="text-primary h4">LKR. {item.price}</strong>
              </p>
              <p>
                <Link to="/updateitem/:id">
                  <button className="btn btn-success mr-5">Update</button>
                </Link>
                <Link to="/updateitem/:id">
                  <button className="btn btn-danger">Remove</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
