import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/img/logo.svg'

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            
            <Link to='/' ><img className="toolbar__logo" src={Logo} style={{ height: '40px'}} alt="GVV Logo"></img></Link>
            <h2 className="toolbar__title"><span style={{color: 'white'}}>GVV</span> PROPIEDADES</h2>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/venta'>Venta</Link></li>
                    <li><Link to='/arriendo'>Arriendo</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;