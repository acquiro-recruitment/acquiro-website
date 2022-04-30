import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 3.125rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Blog = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Blog" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Blog" />

      <Container>
        <Reveal keyframes={fadeIn} triggerOnce>
          <Posts>
            {posts.map((post) => (
              <PostCard post={post} key={post.uri} />
            ))}
          </Posts>
        </Reveal>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </Container>
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

const Container = styled.div`
  margin: 2.5rem 0;
`

const Posts = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`
