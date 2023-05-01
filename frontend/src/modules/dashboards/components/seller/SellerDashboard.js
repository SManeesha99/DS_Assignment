import React from 'react'
import { useState, useEffect } from "react";
import './SellerDashboard.css'
import axios from "axios";
import DashboardHeader from "../../../common/components/DashboardHeader"
import SellerSideNav from '../../../common/components/SellerSideNav'

export default function SellerDashboard() {

  const id =localStorage.getItem("id");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [item, setItem] = React.useState([]);

  useEffect(()=>{
    const getOwnItems = async () => {
      await axios.get(`http://localhost:5001/api/items/ownitems/${localStorage.getItem("id")}`).then((res) => {
        setItem(res.data);
      }).catch((err) => {
          console.log(err.massage);
      }) 
  }
  getOwnItems();
  },[])

  const filteredItem = item.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
});

  return (
    <div>
      <div className="site-wrap ">
      <DashboardHeader />
       <SellerSideNav />
        <div className="bg-light py-3 ">
        </div>
        <div className="site-section dashboardContainer">
          <div className="container">
            <div className="row">
            </div>
            <div className="row">
              {filteredItem.map((item)=>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href={`/SellerSingleProduct/${item._id}`}> <img src={item.image} alt="Image" style={{ width:'250px', height:'250px' }}/></a>
                <h3 className="text-dark"><a href={`/SellerSingleProduct/${item._id}`} style={{fontSize: '25px'}}>{item.name}</a></h3>
                <p className="price">LKR. {item.price}</p>
              </div>
              )}
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                {/* <div className="site-block-27">
                  <ul>
                    <li><a href="#" style={{textDecoration: 'none'}}>&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>2</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>3</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>4</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>5</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>&gt;</a></li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
