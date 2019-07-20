import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import Toolbar from '../components/Toolbar';
import Footer from '../components/footer';


import Img from 'gatsby-image';
import Ficha from './Ficha1.jpg';

import {FaBed, FaShower, FaWarehouse, FaRulerCombined } from 'react-icons/fa';

export default ({ data }) => {
    const propiedad = data.markdownRemark;
    
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
                background: '#C4C4C4',
                height: '100%',
                paddingBottom: '30px'
                }}>
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
                        fontSize: '36px',
                        lineHeight: '42px',
                        textIndent: '10px',
                        color: '#FFFFFF',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
                        padding: '20px',
                        justifyContent: 'center'
                }}>{propiedad.frontmatter.title}</h2>
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
                    marginBottom: '50px'
                     }}>
                     <div style={{
                                width: '100%', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff',
                                
                                }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                    <Link to={propiedad.frontmatter.album_image1.childImageSharp.fluid}><Img fluid={propiedad.frontmatter.album_image1.childImageSharp.fluid}/></Link></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image2.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image3.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image4.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image5.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image6.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image7.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image8.childImageSharp.fluid}/></div>
                            <div style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
                                            <Img fluid={propiedad.frontmatter.album_image9.childImageSharp.fluid}/></div>
                        </div>   
                <div style={{
                    padding: '30px'
                }}>
                <h2>Descripción de la Propiedad</h2>
                <div dangerouslySetInnerHTML={{ __html: propiedad.html}}/>                   
                <h2>Caracteristicas de la Propiedad</h2>
                <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                        }}>
                <p>Habitaciones <FaBed/> {propiedad.frontmatter.dormitorios_c}</p>
                <p>Baños <FaShower /> {propiedad.frontmatter.bano_c}</p>
                <p>Estacionamiento <FaWarehouse/> {propiedad.frontmatter.estacionamiento}</p>
                <p>Superficie <FaRulerCombined /> {propiedad.frontmatter.area_u}</p>
                <p>Gasto Común: {propiedad.frontmatter.gastocomun}</p>
                </div>
                </div>                   
                <h4>Precio de {propiedad.frontmatter.tipo}</h4>
                <h1>{propiedad.frontmatter.precio}</h1>

                </div>
                </div>
                <div><a href="mailto:corredora@gvvpropiedades.com" style={{
                            boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
	                        backgroundColor:'#F9B234',
	                        borderRadius:'10px',
	                        border:'1px solid #ffaa22',
	                        cursor:'pointer',
	                        fontSize:'15px',
	                        fontWeight:'bold',
                            padding:'13px 100px',
	                        textDecoration:'none',
	                        textShadow:'0px 1px 0px #ffee66',
                            color: '#000',
                            textAlign: 'center',
                            marginLeft: '30px'
                            
                            }}>
                                Contactanos
                            </a></div>
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
                gastocomun
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
                album_image3 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image4 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image5 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image6 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image7 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image8 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image9 {
                    childImageSharp{
                        fluid(maxWidth: 900){
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
                album_image10 {
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