import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import theme from "../styles/theme"
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

const SignUp = () => (
  <Layout>
    {/* <Seo title="All posts" /> */}
    <Wrapper>
      <Info>
        <Reveal keyframes={fadeIn} triggerOnce>
          <Heading>
            We would love to
            <br /> hear from you.
          </Heading>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={200} triggerOnce>
          <Text>
            Whether you're in the early stages of work discovery or urgently
            looking for new hires, we respond to every inquiry within a few
            business days.
            <br />
            <br />
            Simply fill out the form with as much context as you're willing to
            share and we can schedule a phone/video call or meeting.
          </Text>
        </Reveal>

        <Reveal keyframes={fadeIn} delay={600} triggerOnce>
          <GlobeContainer>
            <StyledGlobe />
          </GlobeContainer>
        </Reveal>
      </Info>

      <Form />
    </Wrapper>
  </Layout>
)

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 4rem;
  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8rem;
  }
`

const Info = styled.aside`
  position: relative;
  margin-bottom: 1.5rem;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-right: 4rem;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    margin-right: 6rem;
  }
`

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 1.75rem;
  font-weight: 800;
  br {
    display: none;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    br {
      display: block;
    }
  }
`

const Text = styled.p`
  font-size: 1.15rem;
  color: ${theme.colors.grey};
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.02em;
`

const GlobeContainer = styled.div`
  display: none;
  position: relative;
  @media (min-width: ${theme.breakpoints.s}) {
    display: block;
  }
`

const StyledGlobe = styled(Globe)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 32.5rem;
  margin: 1rem auto 2rem;
  background: radial-gradient(60% 90% at 50% 30%, #e1eff5c5 2%, #ffffffe8 100%);
  opacity: 0.4;
  border-radius: 50%;
`

export default SignUp
