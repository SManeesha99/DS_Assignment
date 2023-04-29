import React from 'react';
import { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import './SellerAdminSignIn.css';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import NotRegHeader from '../../common/components/NotRegHeader';

export default function RegisterBuyer() {

    const navigate = useNavigate();
    const [fireRedirect, setFireRedirect] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [field] = useState("Seller");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e){
        const newForm={

            firstName,
            lastName,
            mobileNumber,
            field,
            email,
            password

    }

    if( firstName==='' && lastName === '' && mobileNumber === '' && email === '' && password === '') {
        swal("All Fields are empty");
    }else if(firstName === ''){
        swal("first Name Field is empty")
    }else if(lastName === ''){
        swal("last Name Field is empty")
    }else if(mobileNumber === ''){
        swal("mobile Number Field is empty")
    }else if(email === ''){
        swal("email Field is empty")
    }else if(password === ''){
        swal("password Field is empty")
    }
    else{

    axios.post('http://localhost:5004/api/user/add',newForm).then(()=>{

        swal({
        title: "Success!",
        text: "Registered Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
        
        }); 
         
        setFireRedirect(true);
        navigate('/seller-login')  
                                        
    }).catch((e)=>{
    alert(e);
    })

    }

    }


  return (
    <div>
    <div className='registerArea'>

    <NotRegHeader/>
        <center>
        <div className='regArea'>
            <h2>Seller Register</h2>
            <div className='regui'>
                <div className='name'>
                    <div class='row fullname'>
                        <div class="col-sm-6">
                            <input
                            name='firstName'
                            onChange={(e) => (
                                setFirstName(e.target.value)
                                 )} 
                             class="form-control" placeholder='First Name'></input>
                        </div>
                        <div class="col-sm-6">
                            <input
                            name='lastName'
                            onChange={(e) => (
                                setLastName(e.target.value)
                                 )} 
                             class="form-control" placeholder='Last Name'></input>
                        </div>
                    </div>
                    
                </div>
                <div className='name'>
                    <input
                    name='mobileNumber'
                    onChange={(e) => (
                        setMobileNumber(e.target.value)
                         )} 
                     class="form-control" placeholder='Mobile Number'></input>
                </div>

                <div className='name'>
                    <input
                    name='field'
                    value="Seller" readOnly
                     class="form-control" ></input>
                </div>

                <div className='name'>
                    <input
                    name='email'
                    onChange={(e) => (
                        setEmail(e.target.value)
                         )}
                    type="email"
                     class="form-control" placeholder='Email'></input>
                </div>
                <div className='name'>
                    <input
                    name='password'
                    onChange={(e) => (
                        setPassword(e.target.value)
                         )}
                    type="password"
                     class="form-control" placeholder='Password'></input>
                </div>


            </div>

            <button class='btn btn-primary' style={{textDecoration:'none', color:'green'}} onClick={sendData}>Register</button>

            <hr/>
            <p className='bottm'>Already have an account? <Link className="nav-link active" aria-current="page" to="/seller-login">Login</Link></p>


        </div>
        </center>

    </div>

</div>
  )
}
