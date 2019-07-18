import React from "react";
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';

//import Navbar from '../components/navbar';

import Toolbar from '../components/Toolbar';
//import SideDrawer from '../components/SideDrawer/Sidedrawer';
//import Backdrop from '../components/Backdrop/Backdrop';
import Footer from '../components/footer'

import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

import Img from 'gatsby-image';

import {FaHandshake, FaClipboardCheck, FaCameraRetro, FaTasks } from 'react-icons/fa'


export default ({data}) => (
  <div>
    <Layout style={{height: '100%'}}>
        <Toolbar />
        <main style={{  marginTop: '60px', 
                        marginBottom: '250px', 
                        minHeight: '100vh', 
                        overflow: 'hidden', 
                        position: 'relative', 
                        display: 'block' }}>
            <h1>Publica tu Propiedad</h1>
            <h1>Propiedades Destacadas</h1>
            <div style={{display: 'flex', flexDirection: 'row',flexWrap: 'wrap',  width: '100%'}}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                    
            
                        <Link to={node.fields.slug} css={css`
                            text-decoration: none;
                            color: inherit;
                            `}>
                            <div key={node.id} style={{
                                width: '300px', 
                                border: '1px solid #545454', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px'}}>
                            <Img fluid={node.frontmatter.album_image1.childImageSharp.fluid}/>
                                <h3 
                                css={css`
                                margin-bottom: ${rhythm(1 / 4)};
                                `}>
                                    {node.frontmatter.title}{" "}
                                    <span css={css`
                                        color: #3C3C3A; 
                                        `}
                                    >
                                        - {node.frontmatter.precio}
                                    </span>
                                </h3>
                                <p>{node.excerpt}</p>
                            </div>
                        </Link>
                        
                    ))}
                    </div>
            <h1>Pasos a Seguir Para Publicar</h1>
            <h2>¿Cómo Publicar?</h2>
            <h3>1. Reunión</h3>
            <p><FaHandshake /> Agendaremos una reunión para presentarte nuestra metodología de trabajo y además para conocer tu propiedad.</p>
            <h3>2. Propuesta Comercial</h3>
            <p><FaClipboardCheck/> Basadonos en las características de tu propiedad y en la investigación de precios publicados en el barrio, procederemos a proponerte un previo de compra/venta o arriendo.</p>
            <h3>3. Fotografías de la Propiedad</h3>
            <p><FaCameraRetro /> Nos encargaremos de fotografiar y grabar tu propiedad para entregar al potencial comprador/arrendatario una clara idea de las características y de la ubicación de la propiedad.</p>
            <h3>4. Publicación</h3>
            <p><FaTasks /> Publicaremos tu propiedad en nuestro sitio web y en las plataformas digitales más importantes del país, para darte la mayor exposición posible y maximizar las oportunidades de ser visto.</p>
            <a href="mailto:corredora@gvvpropiedades.com"><button>Contactanos</button></a>
        </main>
    </Layout>
<Footer/>
</div>                            
);

export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {destacada: {eq: "si"}} },
        sort:{fields: [frontmatter___date], order: DESC}){
            totalCount
            edges {
                node{
                    id
                    frontmatter{
                        title
                        precio
                        tipo
                        album_image1 {
                            childImageSharp{
                                 fluid(maxWidth: 900){
                                     ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
    `
