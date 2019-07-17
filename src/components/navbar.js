import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar-css-modules.module.css'

import logo from '../assets/img/logo.svg'


export default () => (
         <div className={styles.nav} style={{ color: `#EAAC08` }}>
                <input type='checkbox' id='navCheck' />
                <Link to='/'><img src={logo} style={{ width: `100px`}} alt="GVV Logo"></img></Link>
                <h1 className={styles.navTitle}>GVV Propiedades</h1>
                <div className={styles.navBtn}>
                    <label for={styles.navCheck}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            <div className={styles.navLinks}>
                <Link to='/'>Inicio</Link>
                <Link to='/venta'>Venta</Link>
                <Link to='/arriendo'>Arriendo</Link>
                <Link to='/contacto'>Contacto</Link>
            </div>
        </div>
      
);

