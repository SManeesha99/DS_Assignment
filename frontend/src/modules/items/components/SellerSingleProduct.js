import React from 'react'
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import { NavLink,Link } from 'react-router-dom'

export default function SellerSingleProduct() {
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
                  src=""
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black"></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
              </p>
              <p>
                <p>$95.00</p>{" "}
                <strong className="text-primary h4"></strong>
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
