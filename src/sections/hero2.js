import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../styles/theme"
// import Video from "../images/acquiro_final.mp4"

export default () => {
  const headingRef = useRef()
  const containerRef = useRef()
  const playBtnRef = useRef()
  const videoRef = useRef()

  const play = () => {
    playBtnRef.current.style.opacity = 0
    videoRef.current.setAttribute("controls", "controls")
    videoRef.current.play()
  }

  useEffect(() => {
    headingRef.current.style.opacity = 1
    headingRef.current.style.transform = "translate3d(0, 0, 0)"

    containerRef.current.style.opacity = 1
    containerRef.current.style.transform = "translate3d(0, 0, 0)"
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const onScroll = (e) => {
      const scrollTop = e.target.documentElement.scrollTop
      const playDistance = 200

      if (scrollTop > playDistance) {
        play()
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Hero>
      <Heading ref={headingRef}>
        We connect Scandinavian companies with international specialists.
      </Heading>

      <HeroVideo ref={containerRef}>
        <svg
          ref={playBtnRef}
          viewBox="0 0 90 90"
          fill="#fafafa"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45 90C20.2 90 0 69.8 0 45S20.2 0 45 0s45 20.2 45 45-20.2 45-45 45zm0-84.4C23.3 5.6 5.6 23.3 5.6 45S23.3 84.4 45 84.4 84.4 66.7 84.4 45 66.7 5.6 45 5.6zm15.8 37.8L40 26.7c-1.4-1.1-3.4-.1-3.4 1.6v33.3c0 1.8 2 2.7 3.4 1.6l20.8-16.6c1.1-.8 1.1-2.4 0-3.2z"></path>
        </svg>
        <video
          muted
          ref={videoRef}
          // src={Video}
          poster="https://www.acquirorecruitment.site/wp-content/uploads/2022/02/video_poster1.jpg"
        />
      </HeroVideo>
    </Hero>
  )
}

const Hero = styled.div`
  position: relative;
  padding-top: 14vw;

  @media (min-width: ${theme.breakpoints.m}) {
    padding-top: 8rem;
  }
`

const Heading = styled.h1`
  position: relative;
  display: block;
  margin: 0;
  font-weight: 500;
  font-size: 1.875rem;
  letter-spacing: -0.1rem;
  line-height: 2.5rem;
  color: ${theme.colors.black};
  padding: 0;
  vertical-align: baseline;
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 4.6875rem, 0);
  will-change: transform, opacity;
  transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s,
    transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s;

  @media (min-width: ${theme.breakpoints.s}) {
    font-size: 2.75rem;
    letter-spacing: -0.15rem;
    line-height: 3.375rem;
  }

  @media (min-width: ${theme.breakpoints.m}) {
    max-width: 56.25rem;
    font-size: 3.25rem;
    letter-spacing: -0.035em;
    line-height: 4.375rem;
  }
`

const HeroVideo = styled.div`
  position: relative;
  margin-top: 16vw;
  cursor: pointer;
  opacity: 0;
  transform: translate3d(0, 4.6875rem, 0);
  will-change: transform, opacity;
  transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.35s,
    transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.35s;
  video {
    width: 100%;
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.5rem;
    height: 3.5rem;
    transform: translate(-50%, -50%);
  }
  @media (min-width: ${theme.breakpoints.m}) {
    margin-top: 12rem;
    svg {
      width: 5.625rem;
      height: 5.625rem;
    }
  }
`
