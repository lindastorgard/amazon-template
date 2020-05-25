import React from "react";
import Layout from "../components/layout";
import MainContainer from "../components/mainContainer";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MainContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainContainer>
  </Layout>
);

export default NotFoundPage;
