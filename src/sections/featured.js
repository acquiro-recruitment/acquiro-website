import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export default () => (
  <Reveal keyframes={fadeIn} fraction={0.75} triggerOnce>
    <BlogPostWrapper>
      <Heading>
        Recruitment insights from <br />
        personal experience.
      </Heading>
      <BlogPosts>
        <BlogPost to="/you-x-helps-launch-nibbly-a-new-grocery-delivery-company">
          <BlogPostImage>
            <StaticImage src="../images/blog1.jpg" alt="blog1" />
          </BlogPostImage>
          <BlogPostHeading>Move To Sweden</BlogPostHeading>
          <BlogPostTitle>
            What is it like to work for a Swedish company?
          </BlogPostTitle>
        </BlogPost>
        <BlogPost to="/how-we-helped-the-help-list">
          <BlogPostImage>
            <StaticImage src="../images/blog2.jpg" alt="blog2" />
          </BlogPostImage>
          <BlogPostHeading>Covid Support</BlogPostHeading>
          <BlogPostTitle>
            Aquiro Recrutiment launches initiative for talent hit by COVID
            layoffs.
          </BlogPostTitle>
        </BlogPost>
        <BlogButton to="/blog">
          More Blog Posts
          <svg width="16" height="11">
            <path
              d="M10.79 10.648c.182 0 .351-.035.506-.104.154-.07.307-.183.458-.34L15.5 6.316a2.87 2.87 0 00.373-.482.99.99 0 00.128-.511.965.965 0 00-.128-.506 2.991 2.991 0 00-.373-.478L11.754.444a1.502 1.502 0 00-.458-.34A1.22 1.22 0 0010.79 0c-.152 0-.298.03-.44.09-.142.06-.27.14-.383.241-.114.1-.205.219-.274.355a.951.951 0 00-.104.44c0 .195.034.367.104.515.069.148.182.304.34.468l1.9 1.957H1.363c-.429 0-.763.112-1.003.336-.24.224-.359.531-.359.922 0 .39.12.698.36.922.239.224.573.336 1.002.336h10.572l-1.9 1.957a1.762 1.762 0 00-.341.473c-.07.151-.104.324-.104.52 0 .151.034.295.104.43.069.136.16.254.274.355.113.1.241.181.383.24.142.06.288.09.44.09z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
        </BlogButton>
      </BlogPosts>
    </BlogPostWrapper>
  </Reveal>
)

const BlogPostWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  padding-top: 14rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-bottom: 8rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: 8rem;
  }
`

const Heading = styled.h3`
  br {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    br {
      display: block;
    }
  }
`

const BlogPosts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.75rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const BlogPost = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  cursor: pointer;
  & + & {
    margin-top: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 360px;
    & + & {
      margin-top: 0;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      div {
        transform: scale(1.01);
      }
    }
  }
`

const BlogPostImage = styled.div`
  width: 100%;
  transition: transform 0.2s ease-in-out;
`

const BlogPostHeading = styled.h3`
  margin-top: 1.35rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.175em;
  text-transform: uppercase;
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-bottom: 0.75rem;
  }
`

const BlogPostTitle = styled.h4`
  margin-top: 0.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.45;
`

const BlogButton = styled(Link)`
  position: relative;
  align-self: flex-start;
  margin-top: 2rem;
  padding: 2rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.02em;
  svg {
    margin-left: 16px;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black} !important;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -32px;
    width: 80px;
    height: 80px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    z-index: -1;
    transition: all 0.2s ease-in-out;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-top: 5.35rem;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      svg {
        transform: scale(1.35);
      }
      &:before {
        transform: scale(1.1) translateY(-45%);
      }
    }
  }
`
