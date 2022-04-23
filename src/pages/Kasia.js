import React from 'react';
import { FaSass, FaHtml5, FaCss3Alt, FaReact, } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';


const Kasia = () => {
    return (
        <div className='container'>
            <div className='container__avatar' />
            <div className="container__details ">
                <h2 className='container__details-username'>Katarzyna Durbas</h2>
                <p className='container__details-description'>Front-end developer</p>
                <h5 className='container__details-hometown'>Kraków, Poland</h5>
                <div className="container__details-icons">
                    <FaReact />
                    <SiJavascript />
                    <FaSass />
                    <FaHtml5 />
                    <FaCss3Alt />
                </div>
            </div>
        </div>
    );
};

export default Kasia;