import React from 'react';

import logo from '../assets/img/logo.svg'
import {FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa'


export default () => (
  
    <div style={{ color: `#EAAC08` }}>
        <img src={logo} style={{ width: `100px`}} alt="GVV Logo"></img>
        <h1>GVV Propiedades</h1>
        <ul>
            <li><FaPhone/>+569 9335 6611</li> 
            <a href="mailto: corredora@gvvpropiedades.com"><li><FaEnvelope />corredora@gvvpropiedades.com</li></a>
            <li><FaMapMarked />Lincoyan 435, 2do Piso, Oficina D, Concepción</li> 
        </ul>
    </div>
  
);