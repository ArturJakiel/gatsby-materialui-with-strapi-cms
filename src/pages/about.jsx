import React from "react";

import Layout from "../layouts/mainLayout";
import SEO from "../components/seo";

const aboutPage = () => {
  return (
    <Layout>
      <SEO title="About Page" />
      <h1>About hullo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, id quia
        perferendis quam excepturi repellendus voluptates deleniti pariatur delectus cum.
      </p>
    </Layout>
  );
};

export default aboutPage;
