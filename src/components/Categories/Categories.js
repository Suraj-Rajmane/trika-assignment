import React from 'react';
import './Categories.css';
import discount from '../../images/discount.PNG';
import handsaw from '../../images/hand-saw.PNG';
import accessoriestool from '../../images/accessories-tool.PNG';
import powertool from '../../images/power-tool.PNG';
import cuttingtool from '../../images/cutting-tool.PNG';


const Categories = () => {
    return (
        <div className="categories">
            <div className="category-container">
            <img src={discount} alt="no tool avilable" id="discount"/>
            <img src={powertool} alt="no tool avilable" id="powertool"/>
            <img src={cuttingtool} alt="no tool avilable" id="cuttingtool"/>
            <img src={handsaw} alt="no tool avilable" id="handsaw"/>
            <img src={accessoriestool} alt="no tool avilable" id="accesories"/>
            
            </div>
            
        </div>
    );
};

export default Categories;