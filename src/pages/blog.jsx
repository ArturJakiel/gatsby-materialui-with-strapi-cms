/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../layouts/mainLayout";
import SEO from "../components/seo";

const blogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog Page" />
      <h1>Blog Page</h1>
      {data.allMarkdownRemark.edges.map((post) => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <span>
            <i>
              Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
            </i>
          </span>
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <hr />
        </div>
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
          }
        }
      }
    }
  }
`;
export default blogPage;
