import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

export default ({data}) => {
    console.log(data)
    return (
    <Layout>
        <Navbar />
        <h1 
        css={
            css`
            display: inline-block;
            border-bottom: 1px solid;`
        }>Propiedades en Arriendo</h1>
            <h4>{data.allMarkdownRemark.totalCount} Propiedades Publicadas</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
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
            ))}
            
        

    </Layout>
)};

export const query = graphql`
    query {
        allMarkdownRemark(filter:{frontmatter: {tipo: {eq: "arriendo"}} }){
            totalCount
            edges {
                node{
                    id
                    frontmatter{
                        title
                        precio
                        tipo
                    }
                    excerpt
                }
            }
        }
    }
    `