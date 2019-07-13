import React from 'react';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <Navbar />
        <div style={{ color: '#000'}}>
            <h1>Formulario de Contacto</h1>
            <p>Dejanos tus datos para solicitar una visita a la propiedad seleccionada</p>
        </div>
    </Layout>
)