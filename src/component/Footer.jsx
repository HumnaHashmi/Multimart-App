import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: '#E5B836' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="display-4 mb-4" style={{ fontWeight:'bold'}}>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus et sapien euismod, eu laoreet
              lorem mollis.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="font-bold mb-4">Contact</h5>
            <p>Email: multimartclothing@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-4">
            <h5 className="font-bold mb-4">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="me-3 text-white fs-4">
                <i className="fab fa-facebook-f" style={{color:'#3b5998'}}></i>
              </a>
              <a href="#" className="me-3 text-white fs-4">
                <i className="fab fa-twitter" style={{color:'#00acee'}}></i>
              </a>
              <a href="#" className="me-3 text-white fs-4">
                <i className="fab fa-instagram" style={{color:'#d62976'}}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center text-black">
            <p>&copy; {new Date().getFullYear()} Multimart Clothing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Shop = () => {
  // ... (your existing Shop component code)

  return (
    <>
      {/* ... (your existing Shop component JSX) */}

      {/* Add the Footer component at the bottom */}
      <Footer />
    </>
  );
};

export default Shop;
