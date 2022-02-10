import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import theme from "../styles/theme"
import Bio from "./bio"

const PostCard = ({ post }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  console.log(post)

  return (
    <LinkWrapper to={post.uri} featured={post.isSticky}>
      <Image>
        <GatsbyImage
          image={featuredImage.data}
          alt={featuredImage.alt}
          imgStyle={
            post.isSticky
              ? {
                  height: "22.5rem",
                  borderRadius: "0.625rem 0 0 0.625rem",
                }
              : { height: "15.625rem", borderRadius: "0.625rem 0.625rem 0 0" }
          }
        />
      </Image>
      <Body featured={post.isSticky}>
        <PostTitle featured={post.isSticky}>{parse(post.title)}</PostTitle>
        {post.isSticky && <PostExcerpt>{parse(post.excerpt)}</PostExcerpt>}
        {/* <div>Kevin Ivan</div> */}
        <Bio author={post.author.node} small />
      </Body>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  display: flex;
  flex: ${({ featured }) => (featured ? "1 1 100%" : "1 1 25rem")};
  flex-direction: column;
  order: ${({ featured }) => (featured ? "-1" : "0")};
  margin: ${({ noMargin }) => (noMargin ? "0 0 3rem" : "0 1.5rem 3rem")};
  overflow: hidden;
  border-radius: 0 0 0.625rem 0.625rem;
  box-shadow: 0 2.1875rem 6.25rem 0 rgba(31, 2, 89, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: none;
    color: inherit;
    transform: translateY(-0.125rem);
    box-shadow: 0 2.1875rem 5rem 1.25rem rgba(31, 2, 89, 0.1);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: ${({ featured }) => (featured ? "row" : "column")};
    border-radius: ${({ featured }) =>
      featured ? "0.625rem" : "0 0 0.625rem 0.625rem"};
  }
`

const Image = styled.div`
  width: 100%;
  height: 15.625rem;
  transition: transform 0.2s ease-in-out;
`

const Body = styled.div`
  padding: 1.5rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex: ${({ featured }) => (featured ? "0 1 31.875rem" : "1")};
    padding: ${({ featured }) => featured && "2rem"};
  }
`

const PostTitle = styled.h3`
  margin: ${({ featured }) => (featured ? "0" : "0 0 1.25rem")};
  font-size: ${({ featured }) => (featured ? "1.75rem" : "1.15rem")};
`

const PostExcerpt = styled.div`
  margin: 1rem 0;
  padding-bottom: 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.black};
`

export default PostCard
