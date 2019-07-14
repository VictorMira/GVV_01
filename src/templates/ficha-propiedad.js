import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import {FaBed, FaShower, FaWarehouse, FaRulerCombined } from 'react-icons/fa'

export default ({ data }) => {
    const propiedad = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1>{propiedad.frontmatter.title}</h1>
                <h2>Propiedad en {propiedad.frontmatter.tipo}</h2>

                <h2>Descripción de la Propiedad</h2>
                <div dangerouslySetInnerHTML={{ __html: propiedad.html}}/>

                <h2>Caracteristicas de la Propiedad</h2>
                <p>Habitaciones <FaBed/> {propiedad.frontmatter.dormitorios_c}</p>
                <p>Baños <FaShower />{propiedad.frontmatter.bano_c}</p>
                <p>Estacionamiento<FaWarehouse/> {propiedad.frontmatter.estacionamiento}</p>
                <p>Superficie <FaRulerCombined /> {propiedad.frontmatter.area_u}</p>

                <h3>Precio de {propiedad.frontmatter.tipo}</h3>
                <h2>{propiedad.frontmatter.precio}</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }} ){
            html
            frontmatter{
                title
                tipo
                dormitorios_c
                bano_c
                estacionamiento
                area_u
                precio
            }
        }
    }
`