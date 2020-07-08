/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../layouts/mainLayout";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <p>HEllo from blog post</p>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

export default BlogPostTemplate;
