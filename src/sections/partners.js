import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
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
)

const Container = styled.div`
  position: relative;
  padding-top: 12rem;
`

const Heading = styled.h2`
  margin-bottom: 4rem;
  text-align: center;
`

const Partners = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Partner = styled.div`
  width: 300px;
  text-align: center;
`
