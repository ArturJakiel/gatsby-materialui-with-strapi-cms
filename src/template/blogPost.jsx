/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as MaterialLink } from "@material-ui/core";

import Layout from "../layouts/mainLayout";

const BlogBreadcrumbs = ({ title }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <MaterialLink color="inherit" href="/">
        Home
      </MaterialLink>
      <MaterialLink color="inherit" href="/blog">
        Blog
      </MaterialLink>
      <Typography color="textPrimary">{title}</Typography>
    </Breadcrumbs>
  );
};

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <BlogBreadcrumbs title={post.frontmatter.title} />
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
        lead
      }
    }
  }
`;

export default BlogPostTemplate;
