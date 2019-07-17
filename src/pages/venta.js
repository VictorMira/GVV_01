import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Toolbar from '../components/Toolbar';
import Footer from '../components/footer';
import Layout from '../components/layout';

import Img from 'gatsby-image'

export default ({data}) => {
    console.log(data)
    return (
    <Layout>
    <main style={{margin: '60px auto'}}>
        <Toolbar />
        <h1 
        css={
            css`
            display: inline-block;
            border-bottom: 1px solid;`
        }>Propiedades en Venta</h1>
            <h4>{data.allMarkdownRemark.totalCount} Propiedades Publicadas</h4>
            <div style={{
                display: 'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap',
                alignItems: 'start',
                alignContent: 'flex-start', 
                width: '100%'}}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={node.fields.slug} css={css`
                    text-decoration: none;
                    color: inherit;`}>
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
        <Footer />
        </main>
    </Layout>
)};

export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {tipo: {eq: "venta"}} },
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