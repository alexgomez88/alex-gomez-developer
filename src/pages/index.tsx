import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Home from "../ui/components/templates/home";

const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProject {
        nodes {
          id
          title
          description {
            value
          }
          url
          image {
            gatsbyImageData(
              placeholder: BLURRED
              forceBlurhash: false
              imgixParams: { auto: "compress" }
            )
          }
        }
      }
    }
  `);

  return { projects: data.allDatoCmsProject.nodes };
};

const IndexPage = () => {
  const data = useHomePageQuery();
  return <Home {...data} />;
};

export default IndexPage;
