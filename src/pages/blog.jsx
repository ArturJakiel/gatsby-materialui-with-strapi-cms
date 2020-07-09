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
      {data.allStrapiPosts.edges.map((post) => (
        <MediaCard
          key={post.node.id}
          postId={post.node.id}
          title={post.node.title}
          lead={post.node.lead}
          author={post.node.author}
          date={post.node.date}
          tags={post.node.tags}
          link={post.node.slug}
        />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allStrapiPosts {
      edges {
        node {
          id
          title
          lead
          author
          date
          slug
          tags {
            name
            id
          }
        }
      }
    }
  }
`;
export default blogPage;
