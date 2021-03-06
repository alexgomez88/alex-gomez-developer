import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Helmet from "react-helmet";
import Footer from "../../molecules/footer";

import Navbar from "../../organisms/navbar";

const useLayoutQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          mainMenu {
            text
            link
          }
          reCaptchaKey
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default function MainLayout(props: any) {

  const { url, title, description, author, mainMenu, reCaptchaKey } = useLayoutQuery();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/* <meta name="keywords" content={keywords} /> */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="author" content={author} />
        <html lang="es" />
        {/* <meta name="image" content={image} /> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        {/* <meta itemProp="image" content={image} /> */}

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        {/* <meta property="og:image" content={image} /> */}

        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_VE" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {/* <meta property="twitter:image" content={image} />
        <link rel="icon" type="image/png" href={icon} /> */}
      </Helmet>
      <Navbar menu={mainMenu} />
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>{props.children}</GoogleReCaptchaProvider>
      <Footer />
    </>
  );
}
