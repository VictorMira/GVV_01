import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import Footer from '../components/footer'

import Img from 'gatsby-image';
import Buscar from './Buscar.jpg';
import { FaBed, FaShower, FaRulerCombined} from 'react-icons/fa';

export default ({data}) => {
    console.log(data)
    return (
    <div>
        <Layout>
            <main style={{margin: '20px auto', 
                            marginBottom: '250px', 
                            minHeight: '100vh', 
                            overflow: 'hidden', 
                            position: 'relative', 
                            display: 'block' }}>
            <div style={{
                background: '#C4C4C4'}}>
                <div style={{
                display: 'flex',
                width: '100%',
                height: '600px',
                background: 'grey', 
                backgroundImage: `url(${Buscar})`,
                backgroundSize: '100% 100%' ,
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
                justifyContent: 'center'

                }}>
            <h1 
            style={{
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
                }}>Propiedades en Arriendo</h1>
            </div>
                <h4 style={{
                        display: 'flex',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        lineHeight: '10px',
                        textIndent: '10px',
                        color: '#000',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                        justifyContent: 'center',
                        padding: '20px'}

                }>{data.allMarkdownRemark.totalCount} Propiedades Publicadas</h4>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    flexWrap: 'wrap',  
                    width: '100%',
                    justifyContent: 'center',
                     }}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    
                    <Link key={node.id} to={node.fields.slug} css={css`
                        text-decoration: none;
                        color: inherit;`}>
                        <div  style={{
                                width: '300px', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow:'0 4px 4px rgba(0,0,0,0.25)', 
                                margin: '15px',
                                background: '#fff'}}>
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
                                 </span>

                            </h3>
                            <p>{node.excerpt}</p>
                            <ul style={{listStyle: 'none', fontSize: '0.8rem', fontWeight: 'bold'}}>
                                    <li>Habitaciones <FaBed/> {node.frontmatter.dormitorios_c}</li>
                                    <li>Baños <FaShower />{node.frontmatter.bano_c}</li>
                                    <li>Superficie <FaRulerCombined /> {node.frontmatter.area_u}</li>
                                </ul>
                                <p style={{textTransform: 'capitalize'}} >{node.frontmatter.tipo}</p>
                                <h3 style={{color: '#58DB74', textAlign: 'right'}}>{node.frontmatter.precio}</h3>
                        </div>
                    </Link>
                
                ))}
                </div>
                </div>
            </main>
        </Layout>
    <Footer />
    </div>
)};

export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {tipo: {eq: "arriendo"}} },
        sort:{fields: [frontmatter___date], order: DESC}){
            totalCount
            edges {
                node{
                    id
                    frontmatter{
                        title
                        precio
                        tipo
                        bano_c
                        dormitorios_c
                        area_u
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