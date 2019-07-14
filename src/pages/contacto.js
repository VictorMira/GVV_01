import React from 'react';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

import {FaPhone, FaEnvelope, FaMapMarked } from 'react-icons/fa'

export default () => (
    <Layout>
        <Navbar />
        <div style={{ color: '#000'}}>
            <h1>Formulario de Contacto</h1>
            <p>Dejanos tus datos para solicitar una visita a la propiedad seleccionada</p>

            <p><FaPhone/>+569 9335 6611</p> 
            <a href="mailto: corredora@gvvpropiedades.com"><p><FaEnvelope />corredora@gvvpropiedades.com</p></a>
            <p><FaMapMarked />Lincoyan 435, 2do Piso, Oficina D, Concepción</p> 
        </div>
    </Layout>
)