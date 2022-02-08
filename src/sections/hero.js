import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Button from "../components/button"

export default () => (
  <Hero>
    <Heading>
      Recruiting top
      <br />
      talent worldwide
    </Heading>
    <SubHeading>
      We connect Scandinavian companies
      <br />
      with international specialists
    </SubHeading>
    <Button dark href="/sign-up">
      Sign up now
    </Button>
    <StaticImage
      src="../images/briefcase2.jpg"
      width={190}
      alt="briefcase"
      style={{
        position: "absolute",
        bottom: "10rem",
        left: "-4rem",
      }}
    />
    <StaticImage
      src="../images/search2.jpg"
      width={136}
      alt="search"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
    <StaticImage
      src="../images/person2.jpg"
      width={148}
      alt="person"
      style={{
        position: "absolute",
        bottom: "4rem",
        right: "2rem",
      }}
    />
  </Hero>
)

const Hero = styled.div`
  position: relative;
  padding: 8rem 0;
  text-align: center;
`

const Heading = styled.h1`
  margin-top: 4rem;
  font-size: 64px;
  letter-spacing: 0.01em;
  line-height: 76px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black};
`

const SubHeading = styled.h2`
  margin-top: 1rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  line-height: 1.5;
`
