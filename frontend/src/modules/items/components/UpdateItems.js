import React, { useEffect, useState } from 'react'
import { NavLink,Link,useParams,useNavigate } from 'react-router-dom'
import DashboardHeader from '../../common/components/DashboardHeader';
import SellerSideNav from '../../common/components/SellerSideNav';
import axios from 'axios';
import swal from "sweetalert";

const UpdateItems = () => {

  const [item, setItem] = useState({});
  const params=useParams();
  const history = useNavigate();
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


const sendRequest = async() =>{

  await axios.put(`http://localhost:5001/api/items/update/${itemID}` , {

  name:String(item.name),
  description:String(item.description),
  quantity:Number(item.quantity),
  price:String(item.price),
  status:String(item.status),
  image:String(item.image)
      

  }).then(()=>{

      swal({
          title: "Success!",
          text: "Item Updated Successfully",
          icon: 'success',
          timer: 2000,
          button: false,
        });
      
  })


}

const handleSubmit = (e) =>{
  e.preventDefault();
  sendRequest().then(()=>history(`/SellerSingleProduct/${item._id}`));
};

const handleChange =(e)=>{

  setItem((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
  }))
}

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
      setItem({
        ...item,
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
               <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Product</h3>
               <form>
                   <div class="mb-3">
                       <label class="form-label">Product Name</label>
                       <input name="name" class="form-control" value={item.name} onChange={handleChange} />
                   </div>
                   <div class="mb-3">
                          <label class="form-label">Description</label>
                          <textarea name="description" class="form-control" style={{ height: "150px" }}value={item.description} onChange={handleChange} />
                      </div>
                   <div class="mb-3">
                       <label class="form-label">Quantity</label>
                       <input name="quantity" class="form-control" value={item.quantity} onChange={handleChange} />
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Price</label>
                       <input name="price" class="form-control" value={item.price} onChange={handleChange} />
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Status</label>
                       <div className="row ">
                       <select class="form-control"  name="status" value={item.status} onChange={handleChange}>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>   
                        </select>
                        </div>
                   </div>
                   <div class="mb-3">
                          <label for="formFile" class="form-label">Product Image</label>
                        <div class="card" style={{ width:'18rem' }}>
                            <img class="card-img-top" src={item.image} alt="Card image cap" style={{ width:'250px', height:'auto' }} />
                            <div class="card-body">
                            </div>
                        </div>
                        <label for="formFile" class="form-label">Change Product Image</label>
                          <input name='image' class="form-control" type="file" id="formFile" onChange={handleImageChange}/>
                      </div>
                   
                   <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Update</button>
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