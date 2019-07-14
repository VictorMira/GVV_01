import React from "react";
import Layout from '../components/layout'

import Navbar from '../components/navbar';

import {FaHandshake, FaClipboardCheck, FaCameraRetro, FaTasks } from 'react-icons/fa'


export default () => (

<Layout>
    <Navbar />
    <h1>Publica tu Propiedad</h1>
    <h1>Propiedades Destacadas</h1>
    <h1>Pasos a Seguir Para Publicar</h1>
    <h2>¿Cómo Publicar?</h2>
    <p>1. Reunión</p>
    <p><FaHandshake />Agendaremos una reunión para presentarte nuestra metodología de trabajo y además para conocer tu propiedad.</p>
    <p>2. Propuesta Comercial</p>
    <p><FaClipboardCheck/>Basadonos en las características de tu propiedad y en la investigación de precios publicados en el barrio, procederemos a proponerte un previo de compra/venta o arriendo.</p>
    <p>3. Fotografías de la Propiedad</p>
    <p><FaCameraRetro /> Nos encargaremos de fotografiar y grabar tu propiedad para entregar al potencial comprador/arrendatario una clara idea de las características y de la ubicación de la propiedad.</p>
    <p>4. Publicación</p>
    <p><FaTasks />Publicaremos tu propiedad en nuestro sitio web y en las plataformas digitales más importantes del país, para darte la mayor exposición posible y maximizar las oportunidades de ser visto.</p>
    <a href="mailto:corredora@gvvpropiedades.com"><button>Contactanos</button></a>
</Layout>

);
