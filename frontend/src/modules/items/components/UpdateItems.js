import React, { useEffect } from 'react'
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import axios from 'axios';
import Select from "react-select";
// const Swal = require('sweetalert2');

const UpdateItems = () => {
    
  return (
    <div>
    <DashboardHeader />
    <SellerSideNav />
 <div className='container-sm'>
   <section className="vh-100 gradient-custom">
     <div className="container py-5 h-100">
       <div className="row justify-content-center align-items-center h-100">
         <div className="col-12 col-lg-9 col-xl-7">
           <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
             <div className="card-body p-4 p-md-5">
               <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Product</h3>
               <form>
                   <div class="mb-3">
                       <label class="form-label">Product Name</label>
                       <input type="text" class="form-control" id='productName' required/>
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Quantity</label>
                       <input type="text" class="form-control" id='dose' required/>
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Seller Name</label>
                       <input type="text" class="form-control" id='sellerName' required/>
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Price</label>
                       <input type="text" class="form-control" id='price' required/>
                   </div>
                   <div class="mb-3">
                       <label for="formFile" class="form-label">Product Image</label>
                       <input class="form-control" type="file" id="formFile" name='photo' />
                   </div>
                   
                   <button type="submit" class="btn btn-primary">Update</button>
               </form>
             </div>
           </div>  
         </div>
       </div>
     </div>
   </section>      
    
 </div>
 </div>

  )
}


export default UpdateItems