import React from 'react'
import './SellerAdminSignIn.css'

export default function SellerAdminSignIn() {
  return (
    <div style={{margin:"auto", width:'100%'}}>
      <main className="form-signin">
        <form>
          {/* <img className="mb-4" src="" alt="" width="72" height="57" style={{margin: 'auto', display: 'block'}}/> */}
          <div className="site-logo mt-5 mb-5" style={{textAlign:'center'}}>
                <a href="index.html" className="js-logo-clone" style={{textDecoration: 'none'}}>HerbAyur</a>
          </div>
          <h1 className="h3 mb-3 fw-normal" style={{textAlign:'center'}}>Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3" style={{textAlign:'center'}}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  )

}
