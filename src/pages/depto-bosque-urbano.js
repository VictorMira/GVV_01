import React from 'react';
import Layout from '../components/layout';
import cover from './dpto-bosque-urbano-1.jpg';

import {FaBed, FaShower, FaWarehouse, FaRulerCombined } from 'react-icons/fa'

export default () => {
    
    return (
        <Layout>
            <div>
                <h1>Departamento Condominio Bosque Urbano</h1>

                <img src={cover} alt='Portada'/>
                <h2>Propiedad en arriendo</h2>
                <h2>Descripción de la Propiedad</h2>
                <h2>Caracteristicas de la Propiedad</h2>
                <p>Habitaciones <FaBed/> 2</p>
                <p>Baños <FaShower /> 2</p>
                <p>Estacionamiento<FaWarehouse/> No</p>
                <p>Superficie <FaRulerCombined /> 62,58m2</p>

                <h3>Precio de Arriendo</h3>
                <h2>$350.000</h2>

                <h2>Otras Caracteristicas de la Propiedad</h2>
                <p>Arriendo departamento nuevo a pasos de Universidad de Concepcion, 
con maravillosas vistas de la ciudad.</p>
                <ul>
                    <li>Cocina americana equipada y amoblada</li>
                    <li>2 Dormitorios amplios (Principal en Suite)</li>
                    <li>2 baños con shower door</li>
                    <li>Gasto comun incluído</li>
                    <li>Closet en ambos dormitorios</li>
                    <li>Balcón con maravillosa vista al bosque y la ciudad</li>
                    <li>Ventanas Termopanel</li>
                    <li>Acceso controlado 24 hrs</li>
                    <li>Sector muy tranquilo</li>
                    <li>Locomoción a pasos del condominio</li>
                </ul>
            </div>
        </Layout>
    )
}

//date: "2019-07-13"



