import React from 'react';
import './SellerAdminSignIn.css';
import {NavLink,Link} from 'react-router-dom';
import NotRegHeader from '../../common/components/NotRegHeader';

export default function SelectRegister() {
  return (
    <div>
        <NotRegHeader/> 
        <div className="section-container">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Seller Sign Up</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={"/seller-register"}>Register as Seller</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Buyer Sign Up</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={"/buyer-register"}>Register as Buyer</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}
