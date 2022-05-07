import React, { useRef } from "react"
import theme from "../styles/theme"
import styled from "styled-components"
import Video from "../video/acquiro_large_compressed.mp4"

export default () => {
  const playBtnRef = useRef()
  const videoRef = useRef()

  const handlePlay = () => {
    console.log("play")
    playBtnRef.current.style.display = "none"
    videoRef.current.controls = true
    videoRef.current.muted = false
  }

  return (
    <Hero>
      <VideoContainer>
        <PlayButton ref={playBtnRef} onClick={() => handlePlay()}>
          <svg
            viewBox="0 0 90 90"
            fill="#fafafa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M45 90C20.2 90 0 69.8 0 45S20.2 0 45 0s45 20.2 45 45-20.2 45-45 45zm0-84.4C23.3 5.6 5.6 23.3 5.6 45S23.3 84.4 45 84.4 84.4 66.7 84.4 45 66.7 5.6 45 5.6zm15.8 37.8L40 26.7c-1.4-1.1-3.4-.1-3.4 1.6v33.3c0 1.8 2 2.7 3.4 1.6l20.8-16.6c1.1-.8 1.1-2.4 0-3.2z"></path>
          </svg>
        </PlayButton>
        <video src={Video} ref={videoRef} loop autoPlay muted />
      </VideoContainer>
    </Hero>
  )
}

const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-top: 6.4rem;

  @media (min-width: ${theme.breakpoints.s}) {
    padding-top: 0;
  }
`

const VideoContainer = styled.div`
  position: relative;
  height: 62.5vw;

  @media (min-width: ${theme.breakpoints.xxl}) {
    height: 62.5rem;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PlayButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  width: 3.5rem;
  transform: translateX(-50%);
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline: none;
  }

  @media (min-width: ${theme.breakpoints.m}) {
    bottom: 4rem;
  }

  @media (min-width: ${theme.breakpoints.l}) {
    width: 4rem;
  }
`
