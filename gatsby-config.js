module.exports = {
  siteMetadata: {
    title: "🇩🇪 Жжёрмани",
    author: "Жаржан",
    description: "заметки программиста про Берлин и Германию ",
    siteUrl: "https://jjermany.netlify.com/",
    social: {
      twitter: "jarjan"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "🇩🇪 Жжёрмани - Блог о жизни в Берлине, Германия",
        short_name: "🇩🇪 Жжёрмани",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ff6441",
        display: "minimal-ui",
        icon: "content/assets/jjermany.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};
