import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg'


export default () => (
  
    <div style={{ color: `#EAAC08` }}>
        <img src={logo} style={{ width: `100px`}} alt="GVV Logo"></img>
        <h1>GVV Propiedades</h1>
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/venta'>Venta</Link></li>
            <li><Link to='/arriendo'>Arriendo</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
    </div>
  
);