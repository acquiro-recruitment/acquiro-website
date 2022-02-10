import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import theme from "../styles/theme"

export default () => {
  const headingRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    headingRef.current.style.opacity = 1
    headingRef.current.style.transform = "translate3d(0, 0, 0)"

    imageRef.current.style.opacity = 1
    imageRef.current.style.transform = "translate3d(0, 0, 0)"
  }, [])

  return (
    <Hero>
      <Heading ref={headingRef}>
        We connect Scandinavian companies with international specialists.
      </Heading>

      <HeroImage ref={imageRef}>
        <StaticImage src="../images/hero_img.jpg" alt="hero" />
        <svg
          fill="#fafafa"
          xmlns="http://www.w3.org/2000/svg"
          height="90"
          width="90"
        >
          <path d="M45 90C20.2 90 0 69.8 0 45S20.2 0 45 0s45 20.2 45 45-20.2 45-45 45zm0-84.4C23.3 5.6 5.6 23.3 5.6 45S23.3 84.4 45 84.4 84.4 66.7 84.4 45 66.7 5.6 45 5.6zm15.8 37.8L40 26.7c-1.4-1.1-3.4-.1-3.4 1.6v33.3c0 1.8 2 2.7 3.4 1.6l20.8-16.6c1.1-.8 1.1-2.4 0-3.2z"></path>
        </svg>
      </HeroImage>
    </Hero>
  )
}

const Hero = styled.div`
  position: relative;
  padding-top: 8rem;
`

const Heading = styled.h1`
  position: relative;
  display: block;
  width: 900px;
  margin: 0;
  font-weight: 500;
  font-size: 52px;
  letter-spacing: -1.5px;
  line-height: 70px;
  color: ${theme.colors.black};
  padding: 0;
  vertical-align: baseline;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 75px, 0);
  will-change: transform, opacity;
  transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s,
    transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s;
`

const HeroImage = styled.div`
  position: relative;
  margin-top: 14rem;
  cursor: pointer;
  opacity: 0;
  transform: translate3d(0, 75px, 0);
  will-change: transform, opacity;
  transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.35s,
    transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.35s;
  img {
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
