// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Seo title="All posts" />
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo title="All posts" />
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.nodes
  return (
    <Layout location={location}>
      <Container>
        <h1>Blog Posts</h1>
        <p>{siteTitle}</p>
        <p>{siteDescription}</p>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <div className="card" key={post.slug}>
              <Link className="card-link" to={post.slug}>
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{post.frontmatter.date}</p>
                <p className="card-description">
                  {post.frontmatter.description}
                </p>
                <p>{post.frontmatter.course}</p>
              </Link>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql(`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMdx(sort: { fields: slug, order: ASC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          title
          description
          course
          date(formatString: "Do MMMM YYYY")
        }
      }
    }
  }
`)

// sort: {fields: slug, order: ASC} 引数を付けたのが原因
