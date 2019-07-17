import React from 'react';
import './SideDrawer.css';
import { Link } from 'gatsby';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/venta'>Venta</Link></li>
            <li><Link to='/arriendo'>Arriendo</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
    </nav>
);

export default sideDrawer;