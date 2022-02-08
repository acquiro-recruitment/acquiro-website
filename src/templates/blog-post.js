import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/@wordpress/block-library/build-style/style.css"
import "../styles/@wordpress/block-library/build-style/theme.css"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <PostHeading>{parse(post.title)}</PostHeading>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <PostContainer>
            <section itemProp="articleBody">{parse(post.content)}</section>
            <Bio author={post.author.node} />
          </PostContainer>
        )}
      </article>

      <PostNav>
        <div>
          {previous && (
            <Link to={previous.uri} rel="prev">
              ← {parse(previous.title)}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={next.uri} rel="next">
              {parse(next.title)} →
            </Link>
          )}
        </div>
      </PostNav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
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
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

const PostContainer = styled.div`
  /* max-width: 800px;
  margin: 0 auto; */
`

const PostHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 18px;
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    /* width: 720px; */
    margin-bottom: 38px;
    font-size: 56px;
    line-height: 60px;
    letter-spacing: -1.8px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    /* width: auto; */
    margin-bottom: 64px;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2px;
  }
`

const PostNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export default BlogPostTemplate
