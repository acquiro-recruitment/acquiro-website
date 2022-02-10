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
          <div>
            <section itemProp="articleBody">{parse(post.content)}</section>
            <Bio author={post.author.node} />
          </div>
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

const PostHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 1.125rem;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-bottom: 2.375rem;
    font-size: 3.5rem;
    line-height: 3.75rem;
    letter-spacing: -0.1em;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-bottom: 4rem;
    font-size: 4.5rem;
    line-height: 4.5rem;
    letter-spacing: -0.125em;
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
