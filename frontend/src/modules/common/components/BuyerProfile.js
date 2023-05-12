import React, { useEffect, useState } from 'react'
import Header from './headerBuyer'
import axios from 'axios';
import Footer from './Footer'
import swal from "sweetalert";
import { NavLink, useNavigate } from 'react-router-dom'

export default function BuyerProfile() {

  const id =localStorage.getItem("id");
  const [user, setUser]=useState({});
  const history = useNavigate();

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

    const sendRequest = async() =>{

      await axios.put(`http://localhost:5004/api/user/update/${id}` , {
    
      firstName:String(user.firstName),
      lastName:String(user.lastName),
      mobileNumber:String(user.mobileNumber),
      email:String(user.email),
      password:String(user.password)
  
      }).then(()=>{
    
          swal({
              title: "Success!",
              text: "Profile Updated Successfully",
              icon: 'success',
              timer: 2000,
              button: false,
            });
          
      })
    
    
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      sendRequest().then(()=>history("/buyerprofile"));

    };
    
    const handleChange =(e)=>{
    
      setUser((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    }

  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <NavLink to='/homebuyer' style={{ textDecoration: 'none' }}>Home</NavLink> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Profile</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="h3 mb-5 text-black">User Profile</h2>
              </div>
              <div className="col-md-12">
                <form action="#" method="post">
                  <div className="p-3 p-lg-5 border">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label for="firstName" className="text-black">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <label for="lastName" className="text-black">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label for="mobileNumber" className="text-black">Mobile Number </label>
                        <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" value={user.mobileNumber} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label for="email" className="text-black">Email</label>
                        <input type="email" className="form-control" id="email" name="email"  value={user.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label for="password" className="text-black">Password </label>
                        <input type="text" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <input type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit} value="Update Profile" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
