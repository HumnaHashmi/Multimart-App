import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]); 

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" style={{height:"300px"}}/>
        </div>
        <div className="col-md-6 mt-3">
          <h4 className="text-uppercase">{product.category}</h4>
          <p>{product.title}</p>
          <p className="lead">Rating: {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
          <p className="price">${product.price}</p>
          <button onClick={() => handleAdd(product)} className="btn btn-block text-white"
           style={{ backgroundColor: '#C51605', fontWeight: 600 }}>

            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-5">
      <div className="card p-5 shadow">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default ProductDetail;
