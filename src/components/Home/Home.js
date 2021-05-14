import React from 'react';
import './Home.css';
import Tool from '../../images/mech-tool.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="navbar">
                    <div className="heading">
                    <h1>Demo</h1>
                    </div>
                    
                    <div className="nav">
                        <div className="nav-item">Home</div>
                        <div className="nav-item">Shop</div>
                        <div className="nav-item">Blog</div>
                        <div className="nav-item">Vendors</div>
                        <div className="nav-item">Page</div>
                    </div>
                    <div className="login">
                        
                    </div>
            </div>

            <div className="tool">
            <div className="tagline tool-flex-item">
                PROVIDES 25% <br/> MORE POWER <br/> TOOL
            </div>
            <img src={Tool} alt="Tool img not available" className="tool-img tool-flex-item"/>
            </div>
            

            <div className="catchline">
                Exclusive email offers and Limited time<br/>
                discount specials
            </div>

            <button className="shop-btn">
                Shop Now
            </button>
           
        </div>
    );
};

export default Home;