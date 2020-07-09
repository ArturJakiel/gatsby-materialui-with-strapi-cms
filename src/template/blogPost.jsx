/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as MaterialLink } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import Layout from "../layouts/mainLayout";

const BlogBreadcrumbs = ({ title }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <MaterialLink color="inherit" href="/">
        Home
      </MaterialLink>
      <MaterialLink color="inherit" href="/blog/">
        Blog
      </MaterialLink>
      <Typography color="textPrimary">{title}</Typography>
    </Breadcrumbs>
  );
};

const BlogPostTemplate = ({ data }) => {
  const post = data.strapiPosts;

  return (
    <Layout>
      <BlogBreadcrumbs title={post.title} />
      {post.tags.map((tag) => (
        <Chip
          style={{ marginRight: "10px" }}
          key={tag.id}
          size="small"
          label={tag.name}
        />
      ))}
      <hr />
      <h1>{post.title}</h1>
      <h4>
        Posted by {post.author} on {post.date}
      </h4>
      <article>
        <ReactMarkdown source={post.content} />
      </article>
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    strapiPosts(slug: { eq: $slug }) {
      author
      content
      date
      slug
      title
      lead
      tags {
        id
        name
      }
    }
  }
`;

export default BlogPostTemplate;
