import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import parse from "html-react-parser"
import Bio from "./bio"

const LinkWrapper = styled(Link)`
  display: flex;
  flex: ${({ featured }) => (featured ? "1 1 100%" : "1 1 400px")};
  flex-direction: column;
  order: ${({ featured }) => (featured ? "-1" : "0")};
  margin: ${({ noMargin }) => (noMargin ? "0 0 3rem" : "0 1.5rem 3rem")};
  overflow: hidden;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 35px 100px 0 rgba(31, 2, 89, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: none;
    color: inherit;
    transform: translateY(-2px);
    box-shadow: 0 35px 80px 20px rgba(31, 2, 89, 0.1);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: ${({ featured }) => (featured ? "row" : "column")};
    border-radius: ${({ featured }) =>
      featured ? "0 6px 6px 0" : "0 0 6px 6px"};
  }
`

const Image = styled.div`
  width: 100%;
  height: 250px;
  transition: transform 0.2s ease-in-out;
`

const Body = styled.div`
  padding: 1.5rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex: ${({ featured }) => (featured ? "0 1 510px;" : "1")};
    padding: ${({ featured }) => featured && "2rem"};
  }
`

const PostTitle = styled.h3`
  margin: 0;
  font-size: ${({ featured }) => (featured ? "1.5rem" : "1rem")};
`

const PostExcerpt = styled.p`
  margin: 1rem 0 0;
  font-size: 0.85rem;
  font-weight: 600;
`

const PostCard = ({ post }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  console.log(post)

  return (
    <LinkWrapper to={post.uri} featured={post.isSticky ? true : undefined}>
      <Image>
        <GatsbyImage
          image={featuredImage.data}
          alt={featuredImage.alt}
          imgStyle={
            post.isSticky
              ? { height: "auto", borderRadius: "10px 0 0 10px" }
              : { height: "250px", borderRadius: "10px 10px 0 0" }
          }
        />
      </Image>
      <Body featured={post.isSticky ? true : undefined}>
        <PostTitle featured={post.isSticky ? true : undefined}>
          {parse(post.title)}
        </PostTitle>
        {post.isSticky && <PostExcerpt>{parse(post.excerpt)}</PostExcerpt>}
        <Bio author={post.author.node} />
      </Body>
    </LinkWrapper>
  )
}

export default PostCard
