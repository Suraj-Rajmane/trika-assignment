import React from 'react';
import './Products.css';
import img1 from  '../../images/img-1.PNG'
import img2 from  '../../images/img-2.PNG'
import img3 from  '../../images/img-3.PNG'
import img4 from  '../../images/img-4.PNG'

const Products = () => {
    return (
        <div className="products">
            <h1 id="heading">THE OUR PRODUCTS</h1>
            <div className="product-container">
                <div className="product-card" >
                    <img src={img1}/>
                    <div className="product-info">
                        <p>Product-1</p>
                    </div>
                </div>
                <div className="product-card" >
                    <img src={img2}/>
                    <div className="product-info">
                    <p>Product-2</p>
                    </div>
                </div>
                <div className="product-card" >
                    <img src={img3}/>
                    <div className="product-info" >
                    <p>Product-3</p>
                    </div>
                </div>
                <div className="product-card" >
                    <img src={img4}/>
                    <div className="product-info">
                    <p>Product-4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;