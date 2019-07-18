import React from 'react';
import './footer.css'

import {FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa'


export default () => (
    <div className="footer" >
        <ul className="footer__contact">
            <li><FaPhone/> +569 9335 6611</li> 
            <a href="mailto: corredora@gvvpropiedades.com"><li><FaEnvelope /> corredora@gvvpropiedades.com</li></a>
            <li><FaMapMarked /> Lincoyan 435, 2do Piso, Oficina D, Concepción</li> 
        </ul>
        
    </div>
       
);