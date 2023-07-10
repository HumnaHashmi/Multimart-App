import React from 'react'
import { NavLink } from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
import homeImg from '../../assets/images/Untitled design (4) 3.png'
import mens from "../../assets/images/mens.png";
import womens from "../../assets/images/womens (1).png";
import kids from "../../assets/images/kids.png";
import F0064201301_2 from "../../assets/images/F0064201301_2 1.png";
import F0066101301_3 from "../../assets/images/F0066101301_3 1.png";
import F0073101901_jacket_2 from "../../assets/images/F0073101901-jacket_2 1.png";
function Home() {
  return (
   <>
     <Helmet title={'Home'}></Helmet>
    <div class="container-fluid top mt-5">
  <div class="row">
    <div class="col-md-6 top_column text-white" >
      <div class="top_text h1 mt-5">
        The only wardrobe you need
      </div>
      <div class="mt-4 bottom_text">
        Shop elegant & comfortable Men's Polo from our wide range of collection. Pull off the classy & elegant styles with MMTM.
      </div>
      <div class="mt-5" >
        <NavLink to="/shop"><button type="button" class="btn btn-secondary-1 text-white px-5 py-3 btn-lg" >shop Now</button></NavLink>
        <NavLink to='/signup'><button type="button" class="btn btn-outline-secondary text-white ml-1  px-5 py-3">Sign Up</button>
        </NavLink>

      </div>
    </div>

    <div class="col-md-6">
    <img src={homeImg}   class="img-fluid mt-5" alt="Responsive image"/>
    </div>
  </div>
 
</div>
 <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="first">10% off on all winter products</div>
            <div className="mt-5 first_text">
              Delivery free for more than 2500 PKR
            </div>
          </div>
          <div className="col-md-3 second">
            <img src={mens} className="img-fluid mt-5" alt="" />
            <div className="mt-2 ml-3 text">Mens</div>
          </div>

          <div className="col-md-3 third mt-5">
            <img src={womens} className="img-fluid mt-4" alt="" />
            <div className="mt-2 ml-3 text">Womens</div>
          </div>
          <div className="col-md-3 fourth">
            <img src={kids} className="img-fluid mt-4" alt="" />
            <div className="mt-2 ml-3 text">Kids</div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5 mb-5">
        <div className="row mr-5">
          <div className="col-md-3 mt-md-5">
            <div className="first">
              Special deals on <span> new arrivals</span>
            </div>
            <div className="mt-5 first_text">
              MMTH just dropped some of the new men and women winters
              collection, shop now and get some amazing deals and discounts
            </div>
          </div>
          <div className="col-md-3 mt-md-5 second">
            <img src={F0064201301_2} className="img-fluid mt-5" alt="" />
          </div>

          <div className="col-md-3 third">
            <img src={F0073101901_jacket_2} className="img-fluid mt-5" alt="" />
          </div>
          <div className="col-md-3 mt-md-5 fourth">
            <img src={F0066101301_3} className="img-fluid mt-5" alt="" />
          </div>
        </div>
      </div>
    
   </>

  )
}

export default Home