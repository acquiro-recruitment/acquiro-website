import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { StaticImage } from "gatsby-plugin-image"
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

export default () => (
  <Reveal keyframes={fadeIn} fraction={1} triggerOnce>
    <Container>
      <Heading>Partners</Heading>
      <Partners>
        <Partner
          href="https://pulsifi.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../images/pulsifi.png" alt="pulsfi" />
        </Partner>
        <Partner
          href="https://www.k2corporatemobility.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../images/k2.png" alt="k2" />
        </Partner>
        <Partner
          href="https://www.thenewbieguide.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../images/newbie.png" alt="newbie" />
        </Partner>
      </Partners>
    </Container>
  </Reveal>
)

const Container = styled.div`
  position: relative;
  padding-top: 4rem;
  padding-bottom: 8rem;
  @media (min-width: ${theme.breakpoints.m}) {
    padding: 12rem 4rem 14rem;
  }
`

const Heading = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: ${theme.breakpoints.m}) {
    margin-bottom: 5rem;
  }
`

const Partners = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;
`

const Partner = styled.a`
  text-align: center;
  @media (min-width: ${theme.breakpoints.m}) {
    width: 18.75rem;
  }
`
