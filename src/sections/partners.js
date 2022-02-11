import React from "react"
import styled from "styled-components"
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
        <Partner>
          <StaticImage src="../images/pulsifi.png" alt="pulsfi" />
        </Partner>
        <Partner>
          <StaticImage src="../images/k2.png" alt="k2" />
        </Partner>
        <Partner>
          <StaticImage src="../images/newbie.png" alt="newbie" />
        </Partner>
      </Partners>
    </Container>
  </Reveal>
)

const Container = styled.div`
  position: relative;
  padding: 12rem 4rem 0;
`

const Heading = styled.h2`
  margin-bottom: 5rem;
  text-align: center;
`

const Partners = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Partner = styled.div`
  width: 18.75rem;
  text-align: center;
`
