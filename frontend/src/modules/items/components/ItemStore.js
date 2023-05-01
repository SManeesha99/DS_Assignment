import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../../common/components/headerBuyer'
import Footer from '../../common/components/Footer'
import { NavLink } from 'react-router-dom'

export default function ItemStore() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [item, setItem] = React.useState([]);
  useEffect(()=>{
      const getAllItems = async () => {
        await axios.get(`http://localhost:5001/api/items/`).then((res) => {
          setItem(res.data);
        console.log( res.data)
        }).catch((err) => {
            console.log(err.massage);
        }) 
    }
    getAllItems();
    },[])

    // console.log(item)

    const filteredItem = item.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        item.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  });

  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><NavLink to='/homebuyer' style={{ textDecoration: 'none' }}>Home</NavLink> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
            {filteredItem.map((item)=>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href={`/single-item/${item._id}`}> <img src={item.image} alt="Image" style={{ width:'250px', height:'250px' }}/></a>
                <h3 className="text-dark"><a href={`/single-item/${item._id}`} style={{fontSize: '25px'}}>{item.name}</a></h3>
                <p className="price">LKR. {item.price}</p>
              </div>
              )}
            </div>
            {/* <div className="row mt-5">
              <div className="col-md-12 text-center">
                <div className="site-block-27">
                  <ul>
                    <li><a href="#" style={{textDecoration: 'none'}}>&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>2</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>3</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>4</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>5</a></li>
                    <li><a href="#" style={{textDecoration: 'none'}}>&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
