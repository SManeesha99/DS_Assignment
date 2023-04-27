import React from 'react'
import DashboardHeader from "../../../common/components/DashboardHeader"
import AdminSideNav from "../../../common/components/AdminSideNav"

export default function TrackOrder() {
  return (
    <div>
       <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
        <AdminSideNav/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
          </main>
        </div>
      </div>
    </div>
  )
}
