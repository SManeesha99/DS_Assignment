import React from 'react'
import './SellerAdminSignIn.css'
import {NavLink,Link} from 'react-router-dom';
import NotRegHeader from '../../common/components/NotRegHeader';

export default function SellerAdminSignIn() {
  return (
<div>
    <div className='registerArea'>
        <NotRegHeader/>
        <center>
            <div className='regArea'>
                <h2>Login Now</h2>
                <div className='regui'>

                    <div className='name'>
                        <label>Email</label>
                        <input class="form-control" type="text" placeholder='Enter Your Email'/>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input class="form-control" type="password" placeholder='Enter Your Password'/>
                    </div>
                </div>

                <Link className="nav-link active" aria-current="page" to="/seller-dashboard"><button class='btn btn-primary'>Login</button></Link>

                <hr/>
                <p className='bottm'>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/selectregister">Register</Link></p>

            </div>
        </center>

    </div>
</div>
  )

}
