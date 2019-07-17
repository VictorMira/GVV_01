import React from "react";
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';

import Navbar from '../components/navbar';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

import Img from 'gatsby-image';

import {FaHandshake, FaClipboardCheck, FaCameraRetro, FaTasks } from 'react-icons/fa'


export default ({data}) => (

<Layout>
    <Navbar />
    <h1>Publica tu Propiedad</h1>
    <h1>Propiedades Destacadas</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={node.fields.slug} css={css`
                    text-decoration: none;
                    color: inherit;`}>
                    <div key={node.id}>
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
