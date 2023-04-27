// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BasicAuth from "./modules/common/components/BasicAuth";
import Homepage from "./modules/common/components/Homepage.js";
import HomeBuyer from "./modules/common/components/HomeBuyer.js";
import HeaderBuyer from "./modules/common/components/headerBuyer";
import NotRegHeader from "./modules/common/components/NotRegHeader";
import Footer from "./modules/common/components/Footer";
import BottomBanners from "./modules/common/components/BottomBanners";
import SingleItem from "./modules/items/components/SingleItem";
import ItemStore from "./modules/items/components/ItemStore";
import SellerSingleProduct from "./modules/items/components/SellerSingleProduct";
import Cart from "./modules/cart/components/Cart";
import CheckoutOrder from "./modules/orders/components/CheckoutOrder";
import ThankYou from "./modules/common/components/ThankYou";
import About from "./modules/common/components/About";
import Contact from "./modules/common/components/Contact";
import SellerAdminSignIn from "./modules/users/components/SellerAdminSignIn";
import SelectLogin from "./modules/users/components/selectlogin";
import SelectRegister from "./modules/users/components/selectregister";
import LoginBuyer from "./modules/users/components/loginBuyer";
import RegisterBuyer from "./modules/users/components/registerBuyer";
import RegisterSeller from "./modules/users/components/registerSeller";
import SellerDashboard from './modules/dashboards/components/seller/SellerDashboard';
import AdminDashboard from "./modules/dashboards/components/admin/AdminDashboard";
import TrackOrder from "./modules/dashboards/components/admin/TrackOrder";
import AddItems from "./modules/items/components/AddItem";
import UpdateItems from "./modules/items/components/UpdateItems";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path='/' />
          <Route path='/:id' />
          <Route path='/auth' element={<BasicAuth />} /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route element={<HeaderBuyer />} />
          <Route element={<NotRegHeader />} />
          <Route element={<BottomBanners />} />
          <Route element={<Footer />} />
          <Route path="/homebuyer" element={<HomeBuyer />} />
          <Route path="/store" element={<ItemStore />} />
          <Route path="SellerSingleProduct" element={<SellerSingleProduct />} />
          <Route path="/single-item" element={<SingleItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutOrder />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/selectlogin" element={<SelectLogin />} />
          <Route path="/selectregister" element={<SelectRegister />} />
          <Route path="/seller-login" element={<SellerAdminSignIn />} />
          <Route path="/buyer-login" element={<LoginBuyer />} />
          <Route path="/buyer-register" element={<RegisterBuyer />} />
          <Route path="/seller-register" element={<RegisterSeller />} />
          <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/track-order' element={<TrackOrder/>}/>
          <Route path='/additem' element={<AddItems/>}/>
          <Route path='/updateitem/:id' element={<UpdateItems/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
