import React from "react";
import Layout from "../../components/Layout";
import Brend from "../../components/Brend";
import Blog from "../../components/Blog";
import Company from "../../components/company";

const About = () => {
  return (
    <div>
      <Layout>
        <Company/>
        <Brend/>
        <Blog/>
      </Layout>
    </div>
  );
};

export default About;
