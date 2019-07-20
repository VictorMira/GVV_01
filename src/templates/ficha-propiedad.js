import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import Toolbar from '../components/Toolbar';
import Footer from '../components/footer';


import Img from 'gatsby-image';
import Ficha from './Ficha1.jpg';

import {FaBed, FaShower, FaWarehouse, FaRulerCombined } from 'react-icons/fa'

export default ({ data }) => {
    const propiedad = data.markdownRemark
    return (
        <div>
        <Layout>
            <main style={{margin: '20px auto', 
                            marginBottom: '250px',
                            width: '100%', 
                            minHeight: '100vh', 
                            overflow: 'hidden', 
                            position: 'relative',
                            display: 'block' }}>
            <Toolbar/>
            <div style={{
                background: '#C4C4C4'}}>
                <div style={{
                display: 'flex',
                width: '100%',
                height: '500px',
                background: 'grey', 
                backgroundImage: `url(${Ficha})`,
                backgroundSize: '100% 100%' ,
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                justifyContent: 'center'

                }}>
                <h1 style={{
                        display: 'flex',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '36px',
                        lineHeight: '42px',
                        textIndent: '10px',
                        color: '#FFFFFF',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
                        padding: '20px',
                        justifyContent: 'center'
                }}>FICHA DE PROPIEDAD</h1>
                </div>
                <h2 style={{
                        display: 'flex',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        lineHeight: '10px',
                        textIndent: '10px',
                        color: '#000',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                        paddingTop: '20px'}}>{propiedad.frontmatter.title}</h2>
                <h3 style={{
                        display: 'flex',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        lineHeight: '10px',
                        textIndent: '10px',
                        color: '#000',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                        paddingTop: '10px'}}>Propiedad en {propiedad.frontmatter.tipo}</h3>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    flexWrap: 'wrap',  
                    width: '100%',
                    justifyContent: 'center',
                     }}>
                     <div style={{
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                <Img fluid={propiedad.frontmatter.album_image1.childImageSharp.fluid}/>
                <Img fluid={propiedad.frontmatter.album_image2.childImageSharp.fluid}/>
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
                </div>
           
            </div>
            </main>
            </Layout>
            <Footer />
        </div>
        
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
                album_image1 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image2 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }

            }
        }
    }
`