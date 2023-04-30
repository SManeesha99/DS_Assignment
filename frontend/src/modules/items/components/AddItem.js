import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import axios from 'axios';
import Select from "react-select";
const Swal = require('sweetalert2');

const AddItems = () => {

    const id =localStorage.getItem("id");
    const [user, setUser]=useState({});
    const [image, setImage] = React.useState("");
    const [name, setName] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [sellerName, setSellerName] = React.useState("");
    const [price, setPrice] = React.useState("");

    const [itemPalyload, setItemPalyload ] = React.useState({

      sellerID: id,
      name: "",
      description: "",
      quantity: "",
      price: "",
      image: "",
  
  });

    const onChangeInput = (e) => {
      setItemPalyload({ 
        ...itemPalyload, 
        [e.target.name]: e.target.value
       });
  };


    const onUserId =  (e) => {
      let combinedValues = e.target.value;
       let valuesArray = combinedValues.split("|");
       setItemPalyload({
         ...itemPalyload,
         sellerID:valuesArray[0],
         sellerFName:valuesArray[1],
       });
   
   };

  useEffect(()=>{
    const getUser= async () => {
      await axios.get(`http://localhost:5004/api/user/get/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data.data);
      }).catch((err) => {
          console.log(err.massage);
      })
  }
  getUser();
  },[id])

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(itemPalyload)
        const res = await axios.post("http://localhost:5001/api/items/send",itemPalyload);
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Iteam added successfully",
          icon: 'success',
          timer: 2000,
          button: false,
        }).then(()=>{
          window.location.href = "/";
        })       
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.msg,
          icon: 'warning',
          timer: 2000,
          button: false,
        })
      }
    };

    const handleImageChange = async e => {
      e.preventDefault()
      try {
          const file = e.target.files[0]
  
          if (!file) return alert("File not exist.")
  
          if (file.size > 1024 * 1024) // 1mb
              return alert("Size too large!")
  
          if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
              return alert("File format is incorrect.")
  
          let formData = new FormData()
          formData.append('file', file)
          formData.append('upload_preset', 'DS_Assignment')
          formData.append('cloud_name', 'drao60sj6')
  
          // setLoading(true)
          const res = await axios.post( "https://api.cloudinary.com/v1_1/drao60sj6/image/upload",
          formData,
          {
            method: "post",
            body: formData,
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          // setLoading(false)
          setItemPalyload({
            ...itemPalyload,
            image: res.data.url,
          });
        } catch (err) {
          console.log(err.response.data.msg);
          
        }
 }
    
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Product</h3>
                  <form>
                      <div class="mb-3">
                          <label class="form-label">Product Name</label>
                          <input type="text" class="form-control" id='productName' name='name' onChange={(e) => onChangeInput(e)} required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Description</label>
                          <textarea type="text" class="form-control" id='description' name='description' onChange={(e) => onChangeInput(e)} required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Quantity</label>
                          <input type="text" class="form-control" id='quantity' name='quantity' onChange={(e) => onChangeInput(e)} required/>
                      </div>
                      <div class="mb-3">
                          <label class="form-label">Price</label>
                          <input type="text" class="form-control" id='price' name='price' onChange={(e) => onChangeInput(e)} required/>
                      </div>
                      <div class="mb-3">
                          <label for="formFile" class="form-label">Product Image</label>
                          <input class="form-control" type="file" id="formFile" name='image' onChange={handleImageChange} />
                      </div>
                      
                      <button type="submit" class="btn btn-primary" onClick={(e)=> onSubmit(e)}>Add</button>
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