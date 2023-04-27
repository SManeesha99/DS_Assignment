import React, { useEffect } from 'react'
import axios from 'axios';
import Select from "react-select";
// const Swal = require('sweetalert2');

const AddItems = () => {
    
  return (
    <div>
    <div className='container-sm'>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Device</h3>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Product Name</label>
                          <input type="text" class="form-control" id='productName' required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Product Type</label>
                          <input type="text" class="form-control" id='productType' required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Dose</label>
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
                          <label class="form-label">Desc</label>
                          <input type="text" class="form-control" id='desc' required/>
                      </div>
                      <div class="mb-3">
                          <label for="formFile" class="form-label">Status</label>
                          <div className="row ">
                                <div >
                                <select class="form-select"  name="status" id='status'>
                                    <option value="active" selected>Active</option>
                                    <option value="inactive">Inctive</option>
                                </select>

                                </div>
                              </div>
                      </div>
                      <div class="mb-3">
                          <label for="formFile" class="form-label">Product Image</label>
                          <input class="form-control" type="file" id="formFile" name='photo' />
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Submit</button>
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


export default AddItems