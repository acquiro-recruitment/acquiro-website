import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useSpring, animated } from "react-spring"
import theme from "../styles/theme"
import Button from "../components/button"
import Globe from "../images/globe.svg"

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

const About = () => {
  const recruitments = useSpring({
    val: 750,
    from: { val: 600 },
    delay: 600,
    config: { tension: 50, friction: 10 },
  })

  const years = useSpring({
    val: 10,
    from: { val: 1 },
    delay: 1000,
    config: { tension: 50, friction: 10 },
  })

  return (
    <Layout>
      <Seo title="About us" />
      <Container>
        <Info>
          <Text>
            <Reveal keyframes={fadeIn} triggerOnce cascade duration={600}>
              <p>
                Acquiro is a digital recruitment agency focusing on
                international specialist- and tech recruitment. We have over 10
                years' experience of international recruitment for global
                Scandinavian companies from almost all parts of the world.
              </p>
              <p>We offer:</p>
              <List>
                <li>
                  International recruitment of tech professionals, managers,
                  engineers and specialists for positions in Scandinavia or
                  remote
                </li>
                <li>Support with international relocation through partners</li>
                <li>
                  Interim solutions within recruitment / talent acquisition
                </li>
              </List>
              <p>
                <Link to="/contact">Contact us</Link> for more information on
                our offers. We respond to all inquiries within 24 hours.
              </p>
              <p>
                If you are a candidate in search for a new position or an
                interim assignment, <Link to="/sign-up">sign up</Link> to join
                our international talent network today.
              </p>
            </Reveal>
          </Text>
        </Info>

        <NumbersWrapper>
          <Reveal keyframes={fadeIn} delay={400} triggerOnce>
            <Numbers>
              <animated.h1>
                {recruitments.val.interpolate((val) => Math.floor(val))}
              </animated.h1>
              <h1>+</h1>
              <Description>
                recruited
                <br />
                candidates
              </Description>
            </Numbers>
          </Reveal>

          <Reveal keyframes={fadeIn} delay={600} triggerOnce>
            <Numbers marginTop>
              <animated.h1>
                {years.val.interpolate((val) => Math.floor(val))}
              </animated.h1>
              <Description>
                years
                <br />
                of experience
              </Description>
            </Numbers>
          </Reveal>

          <GlobeContainer>
            <Reveal keyframes={fadeIn} delay={600} triggerOnce>
              <StyledGlobe />
            </Reveal>
          </GlobeContainer>
        </NumbersWrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 2.5rem auto;
  @media (min-width: ${theme.breakpoints.m}) {
    flex-direction: row;
  }
`

const Info = styled.div`
  max-width: 38.75rem;
  width: 100%;
`

const NumbersWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  gap: 4rem;
  margin-bottom: 2rem;
  @media (min-width: ${theme.breakpoints.m}) {
    display: block;
    margin-bottom: 0;
  }
`

const Numbers = styled.div`
  h1 {
    display: inline-block;
    margin: 0;
    font-size: 3.5rem;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    text-align: right;
    margin-top: ${({ marginTop }) => (marginTop ? "4rem" : 0)};
    h1 {
      font-size: 5rem;
    }
  }
`

const Description = styled.span`
  display: block;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.875rem;
  margin-top: 0.25rem;
  @media (min-width: ${theme.breakpoints.m}) {
    margin-bottom: -1.25rem;
  }
`

const GlobeContainer = styled.div`
  position: absolute;
  top: 34rem;
  right: 1rem;
  width: 37.5rem;
  z-index: -1;
  opacity: 0.75;
  @media (min-width: ${theme.breakpoints.m}) {
    top: 8rem;
  }
`

const StyledGlobe = styled(Globe)`
  margin: 2rem auto 0;
  background: radial-gradient(60% 90% at 50% 30%, #cbe9f6c5 2%, #ffffffe8 100%);
  opacity: 0.1;
  border-radius: 50%;
`

const Text = styled.p`
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
  -webkit-text-size-adjust: 100%;
  font-feature-settings: "kern";
  visibility: visible;
  color: ${theme.colors.black};
  margin: 0 0 4rem;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-size: 1.25rem;
`

const List = styled.ul`
  margin-bottom: 3.25rem;
  padding-left: 2rem;
  font-size: 1.2rem;
`

export default About
