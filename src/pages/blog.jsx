/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../layouts/mainLayout";
import SEO from "../components/seo";
import MediaCard from "../components/MediaBlogCard";

const blogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog Page" />
      <h1>Blog Page</h1>
      {data.allMarkdownRemark.edges.map((post) => (
        <MediaCard
          key={post.node.id}
          title={post.node.frontmatter.title}
          lead={post.node.frontmatter.lead}
          author={post.node.frontmatter.author}
          date={post.node.frontmatter.date}
          link={post.node.frontmatter.path}
        />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            lead
          }
        }
      }
    }
  }
`;
export default blogPage;
