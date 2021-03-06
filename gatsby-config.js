/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Alex Gomez Developer",
    description: `Mechanical Engineer, Software Engineer, and Web Developer.`,
    siteUrl: `https://www.alexgomez.dev`,
    author: `Alejandro Gomez`,
    contact: {
      url: "https://getform.io/f/4fcc4bc8-9b64-43d8-ac71-bc5eb996645e",
      method: "POST",
    },
    reCaptchaKey: "6Ld_xr4eAAAAAFhncOybZkG9q_OaDSFRS69srHeS",
    mainMenu: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "About Me",
        link: "/#about",
      },
      {
        text: "Portafolio",
        link: "/#portafolio",
      },
      {
        text: "Colleagues",
        link: "/#colleagues",
      },
      {
        text: "Contact",
        link: "/#contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `3556d95029f45139da8b8cefa87f41`,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (you probably don't need this!)
        // apiUrl: 'https://site-api.datocms.com',

        // Only source nodes for a specific set of locales. This can limit the memory usage by
        // reducing the amount of nodes created. Useful if you have a large project in DatoCMS
        // and only want to get the data from one selected locale
        // localesToGenerate: ['it', 'en'],

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },

        // Limits page size and can be used to avoid build timeouts.
        // Default is 500
        pageSize: 10,
      },
    },
  ],
};
