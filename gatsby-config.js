module.exports = {
  siteMetadata: {
    title: `nicolasky`,
    description: `Nicolas Castejon website`,
    author: `Nicolas Castejon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/goat-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
