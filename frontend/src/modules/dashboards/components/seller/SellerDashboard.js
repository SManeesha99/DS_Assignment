import React from 'react'
import './SellerDashboard.css'
import { NavLink } from 'react-router-dom'
import DashboardHeader from "../../../common/components/DashboardHeader"
import SellerSideNav from '../../../common/components/SellerSideNav'

export default function SellerDashboard() {
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
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/SellerSingleProduct"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/SellerSingleProduct" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/SellerSingleProduct"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/SellerSingleProduct" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/SellerSingleProduct"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/SellerSingleProduct" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/SellerSingleProduct"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/SellerSingleProduct" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="/SellerSingleProduct"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="/SellerSingleProduct" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <div className="site-block-27">
                  <ul>
                    <li><a href="#" style={{textDecoration: 'none'}}>&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>2</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>3</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>4</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>5</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
