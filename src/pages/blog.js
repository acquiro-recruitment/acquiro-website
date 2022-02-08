import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

const Blog = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* <Seo title="All posts" /> */}

      <Posts>
        {posts.map((post) => (
          <PostCard post={post} key={post.uri} />
        ))}
      </Posts>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        excerpt
        uri
        title
        isSticky
        author {
          node {
            name
            username
            description
            avatar {
              default
              forceDefault
              foundAvatar
              url
            }
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: NONE
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  }
`

const Posts = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`
