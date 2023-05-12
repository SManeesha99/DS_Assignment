import React from 'react'

export default function SellerSideNav() {
  return (
    <div>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/sellerprofile">
                <span data-feather="file"></span>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/additem">
                <span data-feather="shopping-cart"></span>
                Add Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="users"></span>
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Messages
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
