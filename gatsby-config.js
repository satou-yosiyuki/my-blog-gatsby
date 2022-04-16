module.exports = {
  siteMetadata: {
    title: `Site Title`,
    author: {
      name: `Author Name`,
      summary: `summary`
    },
    description: `description`,
    siteUrl: `https://your-site-url.com` 
  },
  pathPrefix: `/root`, // サブドメイン利用時などルートフォルダを任意に変更する
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
              theme: 'one-light',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
  ],
}