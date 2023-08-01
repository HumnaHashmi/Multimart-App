import React from 'react';
import Helmet from '../Helmet/Helmet';
import mens from '../../assets/images/mens 51.png';
import womens from '../../assets/images/womens 3.webp';
import kids from '../../assets/images/kid.jpg';
import F0064201301_2a from '../../assets/images/womens were 2.jpg';
import F0066101301_3 from '../../assets/images/blue shirt womens.jpg';
import F0073101901_jacket_2 from '../../assets/images/menswere1.jpg';
import carousol1 from '../../assets/images/carousol1.png'
import carousol22 from '../../assets/images/bag carousol.webp'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { Carousel } from 'bootstrap'; // Import the Carousel component from bootstrap


const Home = () => {
  useEffect(() => {
    var carousel = new Carousel(document.getElementById('carouselExampleIndicators'), {
      interval: 5000, // Set the interval for auto-slide in milliseconds (5000ms = 5 seconds)
      pause: 'hover', // Pause on hover
    });
  }, []);
  return (
    <>
      <Helmet title={'Home'}></Helmet>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carousol1} alt="First slide" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-md-block">
              <p className='display-3' style={{fontFamily:'fantasy'}}>Winter Collection</p>
              <p className='lead bold'>Shop our latest winter collection now</p>
              <NavLink to='/shop'>
                <button className="btn bold text-white" style={{ backgroundColor: '#C51605' }}>Shop Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carousol22} alt="Second slide" style={{ height: '600px', objectFit: 'cover' }} />
            <div className="carousel-caption d-md-block">
              <p className='display-3' style={{fontFamily:'fantasy'}}>Special Deals</p>
              <p className='lead bold'>Check out our special deals on new arrivals</p>
              <button className="btn bold text-white" style={{ backgroundColor: '#C51605' }}>View Deals</button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Rest of the content */} <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="text-white p-4 rounded" style={{backgroundColor:'#C51605'}}>
              <div className="text-lg font-semibold">10% off on all winter products</div>
              <div className="mt-4">Delivery free for more than 2500 PKR</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <img src={mens} className="img-fluid" alt="Mens" />
            <div className="mt-2 font-semibold text-center">Mens</div>
          </div>

          <div className="col-md-3 mb-4">
            <img src={womens} className="img-fluid" alt="Womens" />
            <div className="mt-2 font-semibold text-center">Womens</div>
          </div>
          <div className="col-md-3 mb-4">
            <img src={kids} className="img-fluid" alt="Kids" />
            <div className="mt-2 font-semibold text-center">Kids</div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className=" text-white p-4 rounded" style={{backgroundColor:'#C51605'}}>
              <div className="text-lg font-semibold">Special deals on new arrivals</div>
              <div className="mt-4">
                MMTH just dropped some of the new men and women winters collection, shop now and get some amazing
                deals and discounts
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <img src={F0064201301_2a} className="img-fluid" alt="Special Deal 1" />
          </div>

          <div className="col-md-3 mb-4">
            <img src={F0073101901_jacket_2} className="img-fluid" alt="Special Deal 2" />
          </div>
          <div className="col-md-3 mb-4">
            <img src={F0066101301_3} className="img-fluid" alt="Special Deal 3" />
          </div>
        </div>
      </div>
      
    </>
  );
};


export default Home;
